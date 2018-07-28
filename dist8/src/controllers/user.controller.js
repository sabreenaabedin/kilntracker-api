"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const user_repository_1 = require("../repositories/user.repository");
const user_model_1 = require("../models/user.model");
const jsonwebtoken_1 = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
const rest_1 = require("@loopback/rest");
let UserController = class UserController {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findUsers() {
        return await this.userRepo.find();
    }
    // @get('/users/{email}')
    // async findUsersById(@param.path.string('email') email: string): Promise<String> {
    //   var jwt: string = "";
    //   // try {
    //   //   let payload = verify(jwt, 'shh') as any;
    //   //   //payload.user.id;
    //   //   return payload;
    //   // } catch (err) {
    //   //   throw new HttpErrors.Unauthorized('Invalid token');
    //   // }
    //   // let userExists: boolean = !!(await this.userRepo.count({ email }));
    //   // if (!userExists) {
    //   //   throw new HttpErrors.BadRequest(`user ID ${email} does not exist`);
    //   // }
    //   await this.userRepo.findById(email)
    //   return jwt;
    // }
    async login(user) {
        // check for login info
        if (!user.email || !user.password) {
            throw new rest_1.HttpErrors.Unauthorized('invalid credentials, more information required');
        }
        // check that user exists
        let userExists = !(await this.userRepo.count({
            and: [
                { email: user.email },
                { password: user.password },
            ],
        }));
        if (!userExists) {
            throw new rest_1.HttpErrors.Unauthorized('user not found');
        }
        let foundUser = await this.userRepo.findOne({
            where: {
                and: [
                    { email: user.email }
                ],
            },
        });
        if (!await bcrypt.compare(user.password, foundUser.password)) {
            throw new rest_1.HttpErrors.Unauthorized('incorrect password');
        }
        let jwt = jsonwebtoken_1.sign({
            user: {
                // id: foundUser.id,
                email: foundUser.email,
                password: foundUser.password
            }
        }, "secretKey", {
            issuer: "sabreena",
            audience: "kiln"
        });
        return {
            token: jwt
        };
    }
    async createUser(user) {
        let newUser = new user_model_1.User();
        newUser.email = user.email;
        newUser.password = user.password;
        return await this.userRepo.create(user);
    }
};
__decorate([
    rest_1.get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findUsers", null);
__decorate([
    rest_1.post('/login'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    rest_1.post('/register'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_model_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository.name)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map