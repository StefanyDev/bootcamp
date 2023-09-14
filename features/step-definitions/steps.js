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
const cucumber_framework_1 = require("@wdio/cucumber-framework");
const globals_1 = require("@wdio/globals");
const login_page_1 = __importDefault(require("../pageobjects/login.page"));
const secure_page_1 = __importDefault(require("../pageobjects/secure.page"));
const pages = {
    login: login_page_1.default
};
(0, cucumber_framework_1.Given)(/^I am on the (\w+) page$/, (page) => __awaiter(void 0, void 0, void 0, function* () {
    yield pages[page].open();
}));
(0, cucumber_framework_1.When)(/^I login with (\w+) and (.+)$/, (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    yield login_page_1.default.login(username, password);
}));
(0, cucumber_framework_1.Then)(/^I should see a flash message saying (.*)$/, (message) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, globals_1.expect)(secure_page_1.default.flashAlert).toBeExisting();
    yield (0, globals_1.expect)(secure_page_1.default.flashAlert).toHaveTextContaining(message);
}));
