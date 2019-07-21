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
  "duration": 4629309187,
  "status": "passed"
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
  "duration": 209368204,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_navigate_to_the_FreeCrm()"
});
formatter.result({
  "duration": 41000,
  "status": "passed"
});
formatter.match({
  "location": "signUpWithDTtest.i_close_broswer()"
});
formatter.result({
  "duration": 27995,
  "status": "passed"
});
formatter.after({
  "duration": 217882986,
  "status": "passed"
});
});