import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/user.model';
export declare class UserController {
    private userRepo;
    constructor(userRepo: UserRepository);
    findUsers(): Promise<User[]>;
    findUsersById(email: string): Promise<User>;
    createUser(user: User): Promise<User>;
}
