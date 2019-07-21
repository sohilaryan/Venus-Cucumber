package com.syntax.cucumber.stepDif;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import com.utils.BaseClass;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class signUpWithDTtest extends BaseClass{

	@Given("^I open the browser$")
	public void i_open_browser() throws Throwable {
		

	}
	
	@Given("^I navigate to the FreeCrm$")
	public void i_navigate_to_the_FreeCrm() throws Throwable {
	
		
		
	}


	@And("^I click on signUp button$")
	public void i_click_on_SignUp() throws Throwable {
		WebElement signUp = driver.findElement(By.xpath("/html/body/div[1]/main/section[1]/a"));
		JavascriptExecutor js= (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", signUp);
	}

	
	@When("^I provide the following details$")
	public void i_provide_the_following_details(DataTable  getData) throws Throwable {
		
		
		
	 for(Map<String, String> data : getData.asMaps(String.class, String.class)) {
		Thread.sleep(2000);
		WebElement drop = driver.findElement(By.xpath("//select[@id='payment_plan_id']"));
		Select dd = new Select(drop);
		dd.selectByVisibleText("Free Edition");
		driver.findElement(By.xpath("//input[@placeholder='First Name']")).sendKeys(data.get("FirstName"));
		driver.findElement(By.xpath("//input[@placeholder='Last Name']")).sendKeys(data.get("LastName"));
		driver.findElement(By.xpath("//input[@placeholder='Email']")).sendKeys(data.get("Email"));
		driver.findElement(By.xpath("//input[@placeholder='Confirm Email']")).sendKeys(data.get("ConfirmEmail"));
		
		driver.findElement(By.xpath("//input[@placeholder='Username']")).sendKeys(data.get("UserName"));
		driver.findElement(By.xpath("//input[@placeholder='Password']")).sendKeys(data.get("Password"));
		driver.findElement(By.xpath("//input[@placeholder='Confirm Password']")).sendKeys(data.get("ConfirmPasswrod"));
		driver.findElement(By.name("agreeTerms")).click();
		driver.findElement(By.className("myButton")).click();
		driver.findElement(By.xpath("//*[@id=\"company_name\"]")).sendKeys(data.get("Company"));
		driver.findElement(By.xpath("//*[@id=\"phone\"]")).sendKeys(data.get("PhoneNumber"));
		driver.findElement(By.xpath("//*[@id=\"companyForm\"]/div[12]/label/input")).click();
		driver.findElement(By.xpath("//*[@id=\"companyForm\"]/div[13]/div/button")).click();
		WebElement signUp = driver.findElement(By.linkText("Sign Up"));
		JavascriptExecutor js= (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();", signUp);
	}

	}
	
	@Then("^I click on continue$")
	public void i_click_on_continue() throws Exception {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@name='btnSubmit']")).click();
	}

	@Then("^I click on Complete Registeration$")
	public void i_click_on_Complete_Registeration() throws InterruptedException {
		Thread.sleep(1000);
		driver.findElement(By.xpath("//button[@name='finish']")).click();

	}
	@Then("^I close broswer$")
	public void i_close_broswer() throws Throwable {
		
	}
}
