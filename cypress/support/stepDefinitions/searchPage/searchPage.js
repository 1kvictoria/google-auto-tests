import {When, Then} from "cypress-cucumber-preprocessor/steps";

When('I type text {string} and click Search', (searchCriteria) => {
    cy.get('div.a4bIc > input').type(searchCriteria)
    cy.get('#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(1)').click();

});

Then('I click on button "I\'m lucky"', () => {
    cy.get('#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(2)').click();
});

Then('I click on button "Search"', () => {
    cy.get('#tsf > div:nth-child(2) > div > div.UUbT9 > div.aajZCb > div > center > input[type="submit"]:nth-child(1)').click();

});

Then('I see {int} top menu categories', (numCategories) => {
    cy.get('div#hdtb-msb-vis').children().should('have.length', numCategories);
});


Then('I see results containing {string}', (searchCriteria) => {
    cy.get('div.srg > .g').each(element => {
        expect(element).to.contain(searchCriteria);
    })
});

Then('I see google pagination', () => {
    cy
        .get('#nav > tbody > tr')
        .find('td')
        .its('length')
        .should('be.lte', 12)
});
