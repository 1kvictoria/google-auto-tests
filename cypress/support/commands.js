Cypress.Commands.add('signIn', (email, password) => {
    cy.get('#gb_70').click();
    cy.get('#identifierId').type(email)
    cy.get('#identifierNext > content > span').click()
    cy.get('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type(password);
    cy.get('#passwordNext > content > span').click();
});


Cypress.Commands.add('signInViaGmailMailBox', (email, password) => {
    cy.get('#gbw > div > div > div.gb_ce.gb_f.gb_pg.gb_gg > div:nth-child(1) > a').click();
    cy.get('#identifierId').type(email);
    cy.get('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type(password);
    cy.get('#passwordNext > content > span').click();
});
