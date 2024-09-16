Feature: Login Scenario
  As a registered user
  I want to login into the application
  So i can access my account

  Scenario: Login successfully
    Given I visit a login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click submit button
    Then I should be logged in

  Scenario Outline: Login failed credentials
    Given I visit a login page
    When I enter username "<username>" and password "<password>"
    And I click submit button
    Then I cant login and appear error "<message>"
    Examples:
      | username        | password       | message                                                                   |
      | locked_out_user | secret_sauce   | Epic sadface: Sorry, this user has been locked out.                       |
      | standard_user@  | secret_sauce   | Epic sadface: Username and password do not match any user in this service |
      | standard_user   | secretsauce123 | Epic sadface: Username and password do not match any user in this service |