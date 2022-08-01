package com.helpers;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class Configuration_Reader {
	public static Properties p;

	public Configuration_Reader() throws Throwable {
		// TODO Auto-generated constructor stub
		File f = new File(
				"C:\\Users\\Admin\\eclipse-workspace\\adactin\\src\\test\\java\\com\\helpers\\data.properties");

		FileInputStream fis = new FileInputStream(f);

		p = new Properties();

		p.load(fis);

	}

	public String getBrowser() {
		// TODO Auto-generated method stub
		String browser = p.getProperty("browser");

		return browser;
	}

	public String getUrl() {
		// TODO Auto-generated method stub
		String url = p.getProperty("url");
		
		return url;
	}
}
