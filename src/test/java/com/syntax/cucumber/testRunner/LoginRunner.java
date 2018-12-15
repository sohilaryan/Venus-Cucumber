package com.syntax.cucumber.testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"pretty","html:target/report-test"},features= {"src/test/resources/features/Login.feature"}
	,glue= "com.syntax.cucumber.stepDifinitions"
	,dryRun=false
	,monochrome=true)


public class LoginRunner {

}
