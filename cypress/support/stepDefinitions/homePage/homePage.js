import { Given, Then,} from "cypress-cucumber-preprocessor/steps";

Given('I open Google homepage', () => {
    cy.visit('https://google.co.uk/');
});

Then ('I see Google logo image', () => {
    cy.get('#hplogo').should('be.visible');
});

Then ('I see Search field', () => {
    cy.get('div.a4bIc > input').should('be.visible');

});

Then ('I see an icon Search by voice',  () => {
    cy.get('div.dRYYxd > div > span').should(($voiceIcon) => {
         expect($voiceIcon).to.have.css('color','rgb(34, 34, 34)');
    })
});

Then ('I see search buttons "Google Search" and "I\'m Feeling Lucky"',  () => {
    cy.get('div.FPdoLc.VlcLAe > center').should(($2SearchBut) => {
        expect($2SearchBut).to.have.length.of.at.most(2);
    });

    cy.get('div.FPdoLc.VlcLAe > center > input[value="Google Search"]')
        .contains('Google Search').should('be.visible');

    cy.get('div.FPdoLc.VlcLAe > center > input[value="I\'m Feeling Lucky"]')
        .contains('I\'m Feeling Lucky').should('be.visible');
});

Then ('I see button "Gmail" and redirection link', () => {
    cy.get('#gbw > div > div > div.gb_ce.gb_f.gb_pg.gb_gg > div:nth-child(1)')
        .contains('Gmail').should('be.visible')
        .should('have.attr', 'href', 'https://mail.google.com/mail/?tab=wm');
});

Then ('I see button "Images" and redirection link',() => {
    cy.get('#gbw > div > div > div.gb_ce.gb_f.gb_pg.gb_gg > div:nth-child(2) > a')
       .contains('Images').should('be.visible')
        .should('have.attr', 'href', 'https://www.google.co.uk/imghp?hl=en&tab=wi');
});

Then ('I see button "Google apps"',  () => {
    cy.get('#gbwa > div.gb_xc > a')
        .should('have.attr', 'href', 'https://www.google.co.uk/intl/en/about/products?tab=wh');
});

Then ('I see button "Sign in"',  (signInButton) => {
    cy.get('#gb_70')
        .contains('Sign in').should('be.visible');
});
