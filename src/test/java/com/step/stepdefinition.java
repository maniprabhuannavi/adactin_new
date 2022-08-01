package com.step;

import com.base.Base_Compo;
import com.helpers.File_Reader_Manager;
import com.pom.Login_Page;
import com.pom.Serach_Hotel;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepdefinition extends Base_Compo {

	Login_Page l = new Login_Page(driver);
	Serach_Hotel s = new Serach_Hotel();

	@Given("^User launch adactin the application$")
	public void user_launch_adactin_the_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
		String url = File_Reader_Manager.getInstance().getInstanceCR().getUrl();
		open_Url(url);
	}

	@When("^User enter \"([^\"]*)\" in username field$")
	public void user_enter_in_username_field(String username) {
		// Write code here that turns the phrase above into concrete actions
		inputValues(l.getUsername(), username);
	}

	@When("^User enter \"([^\"]*)\" password field$")
	public void user_enter_password_field(String password) {
		// Write code here that turns the phrase above into concrete actions
		inputValues(l.getPassword(), password);
	}

	@Then("^clicks login buton in adactin application$")
	public void clicks_login_buton_in_adactin_application() {
		// Write code here that turns the phrase above into concrete actions
		clickElement(l.getLogin());
		
	}

	@Given("^User application$")
	public void user_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

	@When("^User enter  in username field$")
	public void user_enter_in_username_field() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

	@When("^User enter password field$")
	public void user_enter_password_field() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

	@Then("^clicks application$")
	public void clicks_application() throws Throwable {
		// Write code here that turns the phrase above into concrete actions
	}

}
