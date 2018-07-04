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
const rest_1 = require("@loopback/rest");
const ceramic_model_1 = require("../models/ceramic.model");
const repository_1 = require("@loopback/repository");
const ceramic_repository_1 = require("../repositories/ceramic.repository");
let CeramicsController = class CeramicsController {
    constructor(ceramicRepo) {
        this.ceramicRepo = ceramicRepo;
    }
    ceramics() {
        var ceramics = new Array();
        ceramic1: ceramic_model_1.Ceramic;
        // ceramic1.name = 1;
        return ceramics;
    }
    // @get("/ceramics/{ceramicId}")
    // getSpecificPizza(@param.path.string("pizzaId") pizzaId: string
    // ): any {
    //   if (pizzaId == "1") {
    //     return "ABC";
    //   }
    //   throw new HttpErrors.NotFound("Sorry, item not found");
    // }
    async createPizza(ceramic) {
        let createdCeramic = await this.ceramicRepo.create(ceramic);
        return createdCeramic;
    }
};
__decorate([
    rest_1.get('/ceramics'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CeramicsController.prototype, "ceramics", null);
__decorate([
    rest_1.post("/ceramics"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ceramic_model_1.Ceramic]),
    __metadata("design:returntype", Promise)
], CeramicsController.prototype, "createPizza", null);
CeramicsController = __decorate([
    __param(0, repository_1.repository(ceramic_repository_1.CeramicRepository.name)),
    __metadata("design:paramtypes", [ceramic_repository_1.CeramicRepository])
], CeramicsController);
exports.CeramicsController = CeramicsController;
//# sourceMappingURL=ceramics.controller.js.map