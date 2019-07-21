$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/signUpWithDT.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sohilaryan@yahoo.com"
    }
  ],
  "line": 2,
  "name": "SignUpWithDT",
  "description": "",
  "id": "signupwithdt",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5056839322,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "SignUp to Free CRM",
  "description": "",
  "id": "signupwithdt;signup-to-free-crm",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to the FreeCrm",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close broswer",
  "keyword": "Then "
});
formatter.match({
  "location": "signUpWithDTtest.i_open_browser()"
});
formatter.result({
  "duration": 190310206,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 41629,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_close_broswer()"
});
formatter.result({
  "duration": 28809,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1343046312,
  "status": "passed"
});
});