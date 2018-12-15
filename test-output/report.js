$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/signUpWithDT.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 2,
  "name": "SignUpWithDT",
  "description": "",
  "id": "signupwithdt",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "SignUp to the FreeCRM",
  "description": "",
  "id": "signupwithdt;signup-to-the-freecrm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I click on signUp button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I provide the following details",
  "rows": [
    {
      "cells": [
        "Edition",
        "FirstName",
        "LastName",
        "Email",
        "ConfirmEmail",
        "UserName",
        "Password",
        "ConfirmPasswrod",
        "Company",
        "PhoneNumber"
      ],
      "line": 9
    },
    {
      "cells": [
        "Free Edition",
        "John",
        "Son",
        "johnsonjjjj@yahoo.com",
        "johnsonjjjj@yahoo.com",
        "john12345jj",
        "john987",
        "john987",
        "Toyota",
        "5712349876"
      ],
      "line": 10
    },
    {
      "cells": [
        "Free Edition",
        "Khan",
        "Jan",
        "khanjanjjjj@yahoo.com",
        "khanjanjjjj@yahoo.com",
        "khan12345jj",
        "khan987",
        "khan987",
        "Honda",
        "7877677766"
      ],
      "line": 11
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I close broswer",
  "keyword": "Then "
});
formatter.match({
  "location": "signUpWithDTtest.i_open_browser()"
});
formatter.result({
  "duration": 2150890575,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 2145952265,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_click_on_SignUp()"
});
formatter.result({
  "duration": 828375394,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_provide_the_following_details(DataTable)"
});
formatter.result({
  "duration": 9765125969,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Sign Up\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.42.591059 (a3d9684d10d61aa0c45f6723b327283be1ebaad8),platform\u003dMac OS X 10.14.2 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027Sohils-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1c74:98ce:8b69:78bd%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.2\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591059 (a3d9684d10d61a..., userDataDir: /var/folders/0g/tlfxsbl111n...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59430}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 043f02859e4c466880d78300176f94d8\n*** Element info: {Using\u003dlink text, value\u003dSign Up}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:376)\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\n\tat com.syntax.cucumber.stepDif.signUpWithDTtest.i_provide_the_following_details(signUpWithDTtest.java:69)\n\tat ✽.When I provide the following details(src/test/resources/features/signUpWithDT.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "signUpWithDTtest.i_close_broswer()"
});
formatter.result({
  "status": "skipped"
});
});