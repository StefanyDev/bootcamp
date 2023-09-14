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
const globals_1 = require("@wdio/globals");
const page_1 = __importDefault(require("./page"));
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends page_1.default {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return (0, globals_1.$)('#username');
    }
    get inputPassword() {
        return (0, globals_1.$)('#password');
    }
    get btnSubmit() {
        return (0, globals_1.$)('button[type="submit"]');
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inputUsername.setValue(username);
            yield this.inputPassword.setValue(password);
            yield this.btnSubmit.click();
        });
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}
exports.default = new LoginPage();
