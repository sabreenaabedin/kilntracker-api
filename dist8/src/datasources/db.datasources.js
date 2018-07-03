"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const repository_1 = require("@loopback/repository");
const dsConfigPath = path.resolve(__dirname, 
// 3 ".."'s because src files will be copied inside an extra dist directory
'../../../config/datasources.json');
const config = require(dsConfigPath);
exports.db = new repository_1.juggler.DataSource(config);
//# sourceMappingURL=db.datasources.js.map