import { Given, Then} from "cypress-cucumber-preprocessor/steps";

Given('I login with the user {string}', (typeuser) => {
    cy.get('#gb_70').click();
    let password = Cypress.env(typeuser + '_password');
    let email = Cypress.env(typeuser + '_login');
    cy.signIn(email, password) // this is a custom command, code available in support/commands.js
});

Given('I login with the user {string} via GmailButton', (typeuser) => {
    let password = Cypress.env(typeuser + '_password');
    let email = Cypress.env(typeuser + '_login');
    cy.signIn(email, password) // this is a custom command, code available in support/commands.js
});

Then('I log out', (typeuser) => {
    cy.get('#gbw > div > div > div.gb_mc.gb_pg.gb_f > div.gb_Ea.gb_Tc.gb_pg.gb_f.gb_Ob > div.gb_xc.gb_Ia.gb_pg.gb_f').click()
    cy.get('#gb_71').click()
});