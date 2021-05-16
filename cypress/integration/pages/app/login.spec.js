/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/app/LoginScreen/LoginScreen.PageObject';

describe('/pages/app/login', () => {
  describe('when fill and submit a form login request', () => {
    beforeEach(() => {
      cy.log('Setup test before execution.');
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app/api/login')
        .as('userLogin');
    });

    it('should navigate to profile page', () => {
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'omariosouto', password: 'senhasegura' })
        .submitLoginForm();

      cy.url().should('include', '/app/login');

      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;

          cy.getCookie('LOGIN_COOKIE_APP_TOKEN')
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
