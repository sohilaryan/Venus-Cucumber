package com.syntax.cucumber.stepDif;



import java.text.SimpleDateFormat;
import java.util.Date;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import com.utils.BaseClass;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	
	@Before()
	public void open() {

		BaseClass.setUp();
		
	}
	

	
	
	@After()
	public void close(Scenario scenario) {
		
		System.out.println("Ending test:" + scenario.getName()+"  "+BaseClass.dataFormate());
		
		if(!scenario.isFailed()) {
			TakesScreenshot ts = (TakesScreenshot) BaseClass.driver;
			byte[] shot = ts.getScreenshotAs(OutputType.BYTES);
			scenario.embed(shot, "image/png");
		}
		BaseClass.tearDown();
		
	}

}
