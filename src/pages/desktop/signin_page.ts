const {I} = inject();

class SignInPage {

    readonly url = "https://www.saucedemo.com/";
    protected readonly username = "[id=\"user-name\"]";
    protected readonly passwordField = "[id=\"password\"]";
    protected readonly submitButton = "[id=\"login-button\"]";

    async signIn(name = "", password = ""): Promise<void> {
        await this.fillUsername(name);
        await this.fillPassword(password);
        await this.clickSubmit();
    }

    private async fillUsername(name: string): Promise<void> {
        await I.waitForText("Accepted usernames are:");
        await I.fillField(this.username, name);
    }

    private async fillPassword(password: string): Promise<void> {
        await I.fillField(this.passwordField, password);
    }

    private async clickSubmit(): Promise<void> {
        await I.forceClick(this.submitButton);
    }
}

export = new SignInPage();
