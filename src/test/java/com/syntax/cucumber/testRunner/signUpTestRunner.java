package com.syntax.cucumber.testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
//features,glue, dryRun, plugin, strict, monochrome, tags
@CucumberOptions(features = { "src/test/resources/features/signUpWithDT.feature"}
	, glue = { "com.syntax.cucumber.stepDif" }
	, plugin = {"pretty","html:test-output" }
	, dryRun = false
	, monochrome = true
	, strict=false)


public class signUpTestRunner {

}
