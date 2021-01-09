Feature: Google Text Search

  Background: User is on Google search page
    Given an open browser with google.com

  Scenario: User can search any keyword
    When a keyword 'marmoset' is entered into input field
    Then at least one matching result is shown
    And the first result should contain 'marmoset.co'

  Scenario: User can search any keyword in Russian
    When a keyword 'издательство миф' is entered into input field
    Then at least one matching result is shown
    And the first result should contain 'www.mann-ivanov-ferber.ru'
