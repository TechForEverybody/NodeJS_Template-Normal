"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const mongodb_1 = __importDefault(require("./src/database/mongodb"));
mongodb_1.default.on('open', () => {
    console.log('Database connected');
    (0, app_1.default)();
});
mongodb_1.default.on('error', (error) => {
    console.log('Database connection error', error);
});
mongodb_1.default.on('disconnected', () => {
    console.log('Database disconnected');
});
//# sourceMappingURL=index.js.map