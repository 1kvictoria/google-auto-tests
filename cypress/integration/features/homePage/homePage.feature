Feature: Google Home Page

  Background:
    Given I open Google homepage

  Scenario: Google home page as unknown user
    Then I see Google logo image
    Then I see Search field
    Then I see an icon Search by voice
    Then I see search buttons "Google Search" and "I'm Feeling Lucky"
    Then I see button "Gmail" and redirection link
    Then I see button "Images" and redirection link
    Then I see button "Google apps"
    Then I see button "Sign in"

#  Scenario: Google home webpage as known user
#    When I login with the user "user1"
#    Then I see Google logo image
#    Then I see Search field
#    Then I see an icon Search by voice
#    Then I see search buttons "Google Search" and "I'm Feeling Lucky"
#    Then I see button "Gmail"
#    Then I see button "Images"
#    Then I see button "Google apps"
#    Then I log out

#  Scenario: Google home webpage. Log in via Gmail button
#    When I login with the user "user1" via GmailButton
#    Then I insert user data and successfully log in to email
#    When I click on home button
#    Then I see Google logo image
#    Then I see Search field
#    Then I see an icon Search by voice
#    Then I see search buttons "Google Search" and "I'm Feeling Lucky"
#    Then I see button "Gmail"
#    Then I see button "Images"
#    Then I see button "Google apps"
#    Then I log out



