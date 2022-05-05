Feature("User SignIn");

import * as assert from "assert";
import signInPage from "../pages/desktop/signin_page";

const {I} = inject();

const data = new DataTable(["username", "password", "elementToCheckLocator"]);
const password = "secret_sauce";
data.add(["standard_user", password, "//span[.='Products']"]);
data.add(["locked_out_user", password, "//h3[.='Epic sadface: Sorry, this user has been locked out.']"]);
data.add(["problem_user", password, "[src='/static/media/sl-404.168b1cce.jpg']"]);
data.add(["performance_glitch_user", password, "//span[.='Products']"]);

Data(data).Scenario("Users signin test", async ({current}) => {
    console.log("Open SignUp page");
    await I.amOnPage(signInPage.url);

    console.log("Fill user data and submit");
    await signInPage.signIn(current.username, current.password);

    console.log("Verify page state");
    await I.waitForElement(current.elementToCheckLocator);
    assert.ok((await I.grabNumberOfVisibleElements(current.elementToCheckLocator)), "Element that confirms action was not found");
});
