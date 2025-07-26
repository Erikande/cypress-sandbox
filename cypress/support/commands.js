import loginPageSelectors from '../../selectors/loginPage.json'

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/');
    cy.get(loginPageSelectors.usernameInput).type(username);
    cy.get(loginPageSelectors.passwordInput).type(password);
    cy.get(loginPageSelectors.loginButton).click();
});