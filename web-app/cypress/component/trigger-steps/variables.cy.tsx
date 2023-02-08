import Variables from '../../../src/components/trigger-menu/trigger-steps/Variables';

describe('Variables Component', () => {
  before(() => {
    window.localStorage.setItem('ADMIN_SECRET_KEY', 'hello@123');
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<Variables />);
    cy.contains('Table Name');
    cy.contains('Select table Name').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('users').click();
    cy.contains("Select the variables that you'd want to monitor");
    cy.contains('button', 'Add Variables').should('be.visible');
    cy.contains('button', 'Add Derived Variables').should('be.visible');
    cy.contains('button', 'Next').should('be.visible');
  });
});
