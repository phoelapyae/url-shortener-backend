"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../databases/database"));
class URL extends sequelize_1.Model {
}
URL.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    short_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    long_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: database_1.default,
    tableName: 'urls'
});
exports.default = URL;
