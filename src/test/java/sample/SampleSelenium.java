package sample;

import java.io.File;

import org.json.JSONException;
import org.json.JSONObject;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;

import org.testng.annotations.Test;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.AfterClass;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.FileInputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.nio.file.Files;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.*;

import net.lightbody.bmp.BrowserMobProxy;
import net.lightbody.bmp.client.ClientUtil;
import net.lightbody.bmp.proxy.CaptureType;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;

import com.cts.SeleniumScriptExecutorForCxPerf;

public class SampleSelenium {
	SeleniumScriptExecutorForCxPerf uxcf;
	ChromeDriver driver = null;
	String appUrl = "";
	File file;

	public static void main(String[] args) throws JSONException {
		// System.out.println(System.getProperty("exec.args"));
	}

	@BeforeClass
	public void initialize() {
		//String jsonFile = System.getProperty("jsonFilePath");
		// System.out.println("temppath" + jsonFile);
		file = new File("temp.json");
		//String jsonFilePath = file.getAbsolutePath();
		StringBuilder sb = new StringBuilder();
		JSONObject json = null;
		if (file.exists()) {
			System.out.println("Exists");

			InputStream input = null;
			try {
				//input = getClass().getResourceAsStream("../temp.json");
				input=new FileInputStream("temp.json");
				InputStreamReader isr = new InputStreamReader(input);
				BufferedReader br = new BufferedReader(isr);
				String line;
				while ((line = br.readLine()) != null) {
					System.out.print(line);
					sb.append(line);
				}
				json = new JSONObject(sb.toString());
				br.close();
				//System.out.println("json ");
				
			} catch (Exception ex) {
				System.out.println(ex);
			}
		} else {
			System.out.println("Does not Exists");
		}

		// Object obj = parser.parse(new FileReader(jsonFilePath));
		// JSONObject json = null;
		System.out.println(" json to string ");
		System.out.println(json.toString());
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
		uxcf = new SeleniumScriptExecutorForCxPerf("token");
		Proxy seleniumProxy = uxcf.initializeSelenium(json);
		try {
			appUrl = (String) json.getString("appUrl");
		} catch (Exception ex) {
			System.out.println(ex);
		}

		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		capabilities.setCapability(CapabilityType.PROXY, seleniumProxy);
		capabilities.setCapability("acceptInsecureCerts", true);

		capabilities.setJavascriptEnabled(true);
		capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
		capabilities.setCapability(CapabilityType.SUPPORTS_JAVASCRIPT, true);
		ChromeDriverService service = new ChromeDriverService.Builder()
				.usingDriverExecutable(new File("chromedriver.exe")).usingAnyFreePort().build();

		ChromeOptions options = new ChromeOptions();
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		// options.merge(capabilities);

		driver = new ChromeDriver(service, capabilities);
	}

	@Test
	public void method1() {
		uxcf.StartTransactionForSelenium("Launch");
		driver.get(appUrl + "/cosho/");
		uxcf.EndTransactionForPass("Launch", 2000, driver);
		try {
			uxcf.stopcxCollector();
		}catch(Exception ex) {
			System.out.println(ex);
		}
		
		driver.quit();
	}

	@Test
	public void method2() {
		uxcf.StartTransactionForSelenium("GiftCard");
		driver.get(appUrl + "/cosho/giftcard.jsp");
		uxcf.EndTransactionForPass("GiftCard", 2000, driver);
		driver.quit();
	}

	@Test
	public void method3() {
		uxcf.StartTransactionForSelenium("orderDetails");
		driver.get(appUrl + "/cosho/orderDetails");
		uxcf.EndTransactionForPass("orderDetails", 2000, driver);
		driver.quit();
	}

	public void runSelenium(JSONObject myScriptJsonObject) throws JSONException {

//		JSONObject json = myScriptJsonObject;//new JSONObject(jsn);
//		String appUrl="";
//		System.out.println(json);
//		System.setProperty("webdriver.chrome.driver", "./chromedriver.exe");
//		SeleniumScriptExecutorForCxPerf uxcf = new SeleniumScriptExecutorForCxPerf("token");
//		ChromeDriver driver = null;
//		Proxy seleniumProxy = uxcf.initializeSelenium(json);
//		appUrl=(String) json.getString("appUrl");
//		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
//		capabilities.setCapability(CapabilityType.PROXY, seleniumProxy);
//		capabilities.setCapability("acceptInsecureCerts", true);
//
//		capabilities.setJavascriptEnabled(true);
//		capabilities.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
//		capabilities.setCapability(CapabilityType.SUPPORTS_JAVASCRIPT, true);
//		ChromeDriverService service = new ChromeDriverService.Builder()
//				.usingDriverExecutable(new File("chromedriver.exe")).usingAnyFreePort().build();
//
//		ChromeOptions options = new ChromeOptions();
//		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
//
//		driver = new ChromeDriver(service, capabilities);
//
//		uxcf.StartTransactionForSelenium("Launch");
//		driver.get(appUrl+"/cosho/");
//		uxcf.EndTransactionForPass("Launch", 2000, driver);
//
//		uxcf.StartTransactionForSelenium("GiftCard");
//		driver.get(appUrl+"/cosho/giftcard.jsp");
//		uxcf.EndTransactionForPass("GiftCard", 2000, driver);
//
//		uxcf.StartTransactionForSelenium("orderDetails");
//		driver.get(appUrl+"/cosho/orderDetails");
//		uxcf.EndTransactionForPass("orderDetails", 2000, driver);
//
//		uxcf.StartTransactionForSelenium("ViewCart");
//		driver.get(appUrl+"/cosho/viewCart");
//		uxcf.EndTransactionForPass("ViewCart", 2000, driver);
//
//		try {
//			uxcf.stopcxCollector();
//		} catch (JSONException e) {
//			e.printStackTrace();
//		}
//
//		driver.quit();
	}
}
