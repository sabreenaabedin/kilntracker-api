import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';
import { sign, verify } from 'jsonwebtoken'
var bcrypt = require('bcryptjs');
import {
  HttpErrors,
  get,
  param,
  post,
  requestBody
} from '@loopback/rest';

export class UserController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/user/{jwt}')
  async findUsersById(@param.path.string('jwt') jwt: string): Promise<String> {
    var foundUser = new User();
    var foundUserEmail: string = "";
    
    try {
      let payload = verify(jwt, 'secretKey') as any;
      foundUserEmail = payload.user.email;
    } catch (err) {
      throw new HttpErrors.Unauthorized('Invalid token');
    }

     let userExists: boolean = !!(await this.userRepo.count({ foundUserEmail }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user does not exist`);
    }

    await this.userRepo.findById(foundUserEmail)

    return jwt;
  }

  @post('/login')
  async login(@requestBody() user: User) {

    // check for login info
    if (!user.email || !user.password) {
      throw new HttpErrors.Unauthorized('invalid credentials, more information required');
    }

    // check that user exists
    let userExists: boolean = !(await this.userRepo.count({
      and: [
        { email: user.email },
        { password: user.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('user not found');
    }

    let foundUser = await this.userRepo.findOne({
      where: {
        and: [
          { email: user.email }
        ],
      },
    }) as User;

    if (!await bcrypt.compare(user.password, foundUser.password)) {
      throw new HttpErrors.Unauthorized('incorrect password');
    }

    let jwt = sign({
      user: {
        // id: foundUser.id,
        email: foundUser.email,
        password: foundUser.password
      }
    },
      "secretKey",
      {
        issuer: "sabreena",
        audience: "kiln"
      });

    return {
      token: jwt
    }
  }

  @post('/register')
  async createUser(@requestBody() user: User): Promise<User> {
    let newUser = new User();
    newUser.email = user.email;
    newUser.password = user.password;

    return await this.userRepo.create(user);
  }
}