package com.base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base_Compo {

	public static WebDriver driver;

	public static WebDriver browser_Launch(String browser) {
		if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\Admin\\eclipse-workspace\\adactin\\Driver\\chromedriver.exe");
			return driver = new ChromeDriver();
		} else {
			System.out.println("Wrong broser selected");
		}
		return driver;

	}

	public static void open_Url(String url) {
		// TODO Auto-generated method stub
		driver.get(url);
	}

	public static void clickElement(WebElement clk) {
		// TODO Auto-generated method stub
		clk.click();
	}

	public static void inputValues(WebElement ele, String str) {
		// TODO Auto-generated method stub
		ele.sendKeys(str);
	}
}
