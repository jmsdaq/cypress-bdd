describe('UI Tests - Login Page', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the base URL
    });
  
    it('should load the login page', () => {
      cy.get('input[name="username"]').should('be.visible');
      cy.get('input[name="password"]').should('be.visible');
      cy.get('button[type="submit"]').should('be.visible');
    });
  
    it('should display error for invalid credentials', () => {
      cy.get('input[name="username"]').type('invalid_user');
      cy.get('input[name="password"]').type('wrong_password');
      cy.get('button[type="submit"]').click();
  
      cy.get('.error-message').should('be.visible')
        .and('contain', 'Invalid username or password');
    });
  });
  