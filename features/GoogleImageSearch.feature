Feature: Google Image Search

  Background: User is on Google search page
    Given an open browser with google.com

  Scenario: User can search images by keyword
    When I click 'Images' link
    And a keyword 'marmoset' is entered into input field
    Then at least one matching image is shown
