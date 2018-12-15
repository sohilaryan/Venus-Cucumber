$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to FreeCrm with valid credentials",
  "description": "",
  "id": "login-feature;login-to-freecrm-with-valid-credentials",
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
  "name": "I navigate to FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I enter \"sohilaryan\" and \"Afghan@123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I successfuly loggend in",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 3554482799,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_FreeCrm()"
});
formatter.result({
  "duration": 2770541303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sohilaryan",
      "offset": 9
    },
    {
      "val": "Afghan@123",
      "offset": 26
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 438160276,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 4833674540,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_successfuly_loggend_in()"
});
formatter.result({
  "duration": 9922427,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Login to FreeCrm with invalid credentials",
  "description": "",
  "id": "login-feature;login-to-freecrm-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I navigate to FreeCrm",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter \"\u003calextjohn\u003e\" and \"\u003cAlex@123\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I see error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_open_browser()"
});
formatter.result({
  "duration": 1587001433,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_navigate_to_FreeCrm()"
});
formatter.result({
  "duration": 2104412720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003calextjohn\u003e",
      "offset": 9
    },
    {
      "val": "\u003cAlex@123\u003e",
      "offset": 27
    }
  ],
  "location": "LoginSteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 697642902,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_click_login_button()"
});
formatter.result({
  "duration": 1715585853,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.i_see_error_message()"
});
formatter.result({
  "duration": 121774690,
  "status": "passed"
});
});