describe('Login Page Sauce Demo', () => {
  beforeEach(function () {
    cy.fixture('sauceDemoData').as('testData');
  });
  it('should allow a standard user to log in successfully', function () {
    cy.login(this.testData.name, this.testData.password);
    cy.url().should('include', '/inventory.html');
  });
});