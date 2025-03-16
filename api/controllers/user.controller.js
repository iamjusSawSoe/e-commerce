"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.addUser = exports.findUser = exports.getUser = void 0;
const express_validator_1 = require("express-validator");
const http_errors_1 = __importDefault(require("http-errors"));
const uuid_1 = require("uuid");
const users = [
    { id: "1", username: "hello", password: "1234" },
    { id: "2", username: "hello12", password: "12345" },
];
const getUser = (_req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({
            code: 200,
            data: users,
            message: "Hello World!",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.getUser = getUser;
const findUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    console.log(errors, "from errors");
    try {
        if (!errors.isEmpty())
            throw (0, http_errors_1.default)(400, errors.array()[0].msg);
        const resultUser = users.find((item) => item.id === req.params.id);
        if (!resultUser)
            throw (0, http_errors_1.default)(404, "User not found");
        res.status(200).json({
            code: 200,
            data: resultUser,
            message: "Hello World!",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.findUser = findUser;
const addUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    try {
        if (typeof username !== "string")
            throw (0, http_errors_1.default)(400, "Username must be a string");
        if (typeof password !== "string")
            throw (0, http_errors_1.default)(400, "Password must be a string");
        if (!username)
            throw (0, http_errors_1.default)(400, "Username is required");
        if (!password)
            throw (0, http_errors_1.default)(400, "Password is required");
        const newUser = {
            id: (0, uuid_1.v4)(),
            username: username,
            password: password,
        };
        users.push(newUser);
        console.log(users);
        res.status(201).json({
            code: 201,
            data: users,
            message: "User added successfully!",
        });
    }
    catch (error) {
        next(error);
    }
});
exports.addUser = addUser;
const updateUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { username, password } = req.body;
    if (!username)
        throw (0, http_errors_1.default)(400, "Username is required");
    if (!password)
        throw (0, http_errors_1.default)(400, "Password is required");
    if (typeof username !== "string")
        throw (0, http_errors_1.default)(400, "Username must be a string");
    if (typeof password !== "string")
        throw (0, http_errors_1.default)(400, "Password must be a string");
    const errors = (0, express_validator_1.validationResult)(req);
    try {
        if (!errors.isEmpty())
            throw (0, http_errors_1.default)(400, errors.array()[0].msg);
        const foundUserIndex = users.findIndex((item) => item.id === id);
        if (foundUserIndex === -1)
            throw (0, http_errors_1.default)(404, "User not found");
        users[foundUserIndex] = Object.assign(Object.assign({}, users[foundUserIndex]), { username, password });
        res
            .status(200)
            .json({ code: 200, message: "Note updated successfully", data: users });
    }
    catch (error) {
        next(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.id;
    const errors = (0, express_validator_1.validationResult)(req);
    try {
        if (!errors.isEmpty())
            throw (0, http_errors_1.default)(400, errors.array()[0].msg);
        const deletedUserIndex = users.findIndex((item) => item.id === userId);
        if (deletedUserIndex === -1)
            throw (0, http_errors_1.default)(404, "User not found");
        users.splice(deletedUserIndex, 1);
        res.status(200).json({
            code: 201,
            message: "Note delete successfully!",
            data: users,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteUser = deleteUser;
