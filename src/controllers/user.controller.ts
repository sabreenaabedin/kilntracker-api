import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';
import { sign, verify } from 'jsonwebtoken'
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
  ) {}

  @get('/users')
  async findUsers(): Promise<User[]> {
    return await this.userRepo.find();
  }

  @get('/users/{email}')
  async findUsersById(@param.path.string('email') email:string): Promise<User> {

    // try {
    //   let payload = verify(jwt, 'shh') as any;
    //   //payload.user.id;
    //   return payload;
    // } catch (err) {
    //   throw new HttpErrors.Unauthorized('Invalid token');
    // }
    
    let userExists: boolean = !!(await this.userRepo.count({ email }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${email} does not exist`);
    }

    return await this.userRepo.findById(email);
  }

  @post('/register')
  async createUser(@requestBody() user: User): Promise<User> {
    let newUser = new User();
    newUser.email = user.email;
    newUser.password = user.password;
    
    // let jwt = sign(
    //   {
    //     user: {
    //       id: createdUser.id,
    //       email: createdUser.email
    //     },
    //   },
    //   'shh',
    //   {
    //     issuer: 'auth.ix.com',
    //     audience: 'ix.com',
    //   },
    // );

    return await this.userRepo.create(user);


  }
}