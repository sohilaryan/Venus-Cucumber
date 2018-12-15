package com.syntax.cucumber.stepDif;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

	WebDriver driver;

	@Given("^I open browser$")
	public void i_open_browser() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "/Users/SohilAryan/Documents/JARFiles/Drivers/chromedriver");
		driver = new ChromeDriver();

		driver.manage().window().fullscreen();
		driver.manage().timeouts().pageLoadTimeout(12, TimeUnit.SECONDS);

	}

	@Given("^I navigate to FreeCrm$")
	public void i_navigate_to_FreeCrm() throws Throwable {
		driver.get("https://www.freecrm.com/");

	}

	@When("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
	public void i_enter_and(String uName, String password) throws Throwable {
		driver.findElement(By.name("username")).sendKeys(uName);
		driver.findElement(By.name("password")).sendKeys(password);
	}
	

	@When("^I click login button$")
	public void i_click_login_button() throws Throwable {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input")).click();

	}

	@Then("^I successfuly loggend in$")
	public void i_successfuly_loggend_in() throws Throwable {
		String actual = driver.getTitle();
		String expected = "CRMPRO";
		assertEquals(actual, expected, "The value does not match");

	}

	@Then("^I see error message$")
	public void i_see_error_message() throws Throwable {

		String actual = driver.findElement(By.xpath("//*[@id=\"loginForm\"]/div/div/input")).getAttribute("value");
		String expected = "Login";
		assertEquals(actual, expected, "The value does not match");
		driver.quit();
	}

//	@When("^I enter valid username and invalid password$")
//	public void i_enter_valid_username_and_invalid_password() throws Throwable {
//
//		driver.findElement(By.name("username")).sendKeys("sohilaryan");
//		driver.findElement(By.name("password")).sendKeys("BBBBBBB@123");
//
//	}
}