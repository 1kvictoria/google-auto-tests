Feature: Search Page

  Background:
    Given I open Google homepage

  Scenario: Positive case. Test search alphanumeric
    When I type text "Maldives" and click Search
    Then I see 5 top menu categories
    Then I see results containing "Maldives"
    Then I see google pagination
    Then I see button "Google apps"
    Then I see button "Sign in"

#  Scenario: Negative case. Test search not defined value
#    When I type text "hsgajhdhbdjweiuw" and click Search
#    Then I click on button "Search"
#    Then I see 8 search categories
#    Then I see the message "Your search -  did not match any documents"
#    Then I can't see google pagination
#    Then I see button "Google apps"
#    Then I see button "Sign in"

#  Scenario: Negative case. Test search has a typo
#    When I type text "apartment" and click Search
#    Then I see auto-suggestion in the first line
#    Then I see 8 search categories
#    Then I see a number of results
#    Then I see results containing "apartment"
#    Then I see google pagination
#    Then I see button "Google apps"
#    Then I see button "Sign in"

