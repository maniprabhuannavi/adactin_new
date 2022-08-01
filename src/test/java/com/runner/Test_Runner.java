package com.runner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.base.Base_Compo;
import com.helpers.File_Reader_Manager;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@CucumberOptions(features = "src\\test\\java\\com\\featurefile\\adactin.feature", glue = "com.step",
monochrome = true,
dryRun = false,
strict = true ,
tags = "~@sanity",
plugin = {"html:Report/Html_Report",
		"pretty",
		"json:Reports/Cucumber.json",
		"com.cucumber.listener.ExtentCucumberFormatter:Report_ER/ExtentReport.html"
		
}

		
		
		)
@RunWith(Cucumber.class)
public class Test_Runner {

	public static WebDriver driver;

	@BeforeClass
	public static void startUp() throws Throwable {
		// TODO Auto-generated method stub
		String browser = File_Reader_Manager.getInstance().getInstanceCR().getBrowser();
		driver = Base_Compo.browser_Launch(browser);
	}

	@AfterClass
	public static void tearDown() {
		// TODO Auto-generated method stub
		driver.close();
	}
}
