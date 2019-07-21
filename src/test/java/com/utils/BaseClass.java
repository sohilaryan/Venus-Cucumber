package com.utils;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class BaseClass {
	public static WebDriver driver;
	
	
	public static void setUp() {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Drivers/chromedriver");
		driver = new ChromeDriver();
		
		driver.manage().window().fullscreen();
		driver.get("https://www.freecrm.com/");
		driver.manage().timeouts().pageLoadTimeout(12, TimeUnit.SECONDS);
		
	}
	
	public static String dataFormate() {
		Date date=new Date();
		SimpleDateFormat sdf=new SimpleDateFormat("MM-dd-yyyy");
		return sdf.format(date);
	}
	
	public static void tearDown() {
		driver.close();
	}

}
