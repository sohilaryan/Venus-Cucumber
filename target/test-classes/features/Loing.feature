Feature: Login Feature

Scenario: Login to FreeCrm with valid credentials

Given I open browser
And I navigate to FreeCrm
When I enter valid username and password
And I click login button
Then I successfuly loggend in

Scenario: Login to FreeCrm with invalid credentials
Given I open browser
Given I navigate to FreeCrm
When I enter invalid username and password
And  I click login button
Then I see error message
