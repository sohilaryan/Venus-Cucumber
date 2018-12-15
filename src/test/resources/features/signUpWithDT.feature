#Author: your.email@your.domain.com
Feature: SignUpWithDT

  Scenario: SignUp to the FreeCRM
    Given I open browser
    And I navigate to the FreeCrm
    And I click on signUp button
    When I provide the following details
      | Edition      | FirstName | LastName | Email                 | ConfirmEmail          | UserName    | Password | ConfirmPasswrod | Company | PhoneNumber |
      | Free Edition | John      | Son      | johnsonffff@yahoo.com | johnsonffff@yahoo.com | john12345ff | john987  | john987ff       | Toyota  |  5712349876 |
      | Free Edition | Khan      | Jan      | khanjanffff@yahoo.com | khanjanffff@yahoo.com | khan12345ff | khan987  | khan987ff       | Honda   |  7877677766 |
    Then I close broswer
