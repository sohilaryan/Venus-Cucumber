package com.syntax.cucumber.testRunner;


import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/features/signUpWithDT.feature"}
	, glue = { "com.syntax.cucumber.stepDif" }
	, plugin = {"pretty","html:target/html-reports" }
	, dryRun = false
	, monochrome = true
	, strict=false)


public class signUpTestRunner {
	


}
