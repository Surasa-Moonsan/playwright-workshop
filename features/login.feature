Feature: Authentication

@POSITIVE @TEST01
Scenario: User able to login with valid credentials
  Given the user on the login page
  When the user submit credentials "demo@demo.com" and "Welcome1"
  Then the user should be redirect to dashboard

@POSITIVE @TEST02
Scenario: User able to login with valid credentials
  Given the user on the login page
  When the user submit credentials "demo@demo.com" and "Welcome123"
  Then the user should see error message "Unauthorized"

@ITMXWEB
Scenario: User able to login with valid credentials (ITMX internal)
  Given the user in on the login page ITMX internal
  And verify user on the ITMX portal login page




