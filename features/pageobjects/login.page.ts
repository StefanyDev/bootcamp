import { $ } from '@wdio/globals'
import Page from './page';


class LoginPage extends Page {

    public get campoEmail(){
        return $("#email")
    }

    public get campoContrasena(){
        return $('#pass')

    }

    public get botonIngresar (){
        return $('// * [contains (@ name, 'login')] ) [1]')
    }

    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }


    public async login (username: string, password: string) {
        await browser.pause(2000)
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async loginFacebook(email:string,password: string){
        await this.campoEmail.setValue(email)
        await this.campoContrasena.setValue(password)
        await this.botonIngresar.click()

    }
    public open () {
        return super.open();
    }
}

export default new LoginPage();
