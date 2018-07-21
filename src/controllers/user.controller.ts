import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';
import {inject} from '@loopback/context';
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
  async findUsersById(@param.path.number('email') email:string): Promise<User> {
    let userExists: boolean = !!(await this.userRepo.count({ email }));

    if (!userExists) {
      throw new HttpErrors.BadRequest(`user ID ${email} does not exist`);
    }

    return await this.userRepo.findById(email);
  }

  @post("/register")
  async createUser(@requestBody() user: User): Promise<User> {

    let newUser = await this.userRepo.create(user);
    return newUser;

  }
}