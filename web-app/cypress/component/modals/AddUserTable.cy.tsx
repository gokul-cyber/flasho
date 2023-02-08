import AddUserTable from '../../../src/components/modals/AddUserTable';

describe('AddUserTable Component', () => {
  before(() => {
    window.localStorage.setItem('ADMIN_SECRET_KEY', 'hello@123');
  });

  it('should mount and works properly', () => {
    cy.mount(<AddUserTable open={true} closeModal={() => {}} />);
    cy.contains('Add UserTable').should('be.visible');
    cy.contains('Table Name').should('be.visible');
    cy.contains('Primary Key').should('be.visible');
    cy.contains('button', 'Done').should('be.visible');
  });
});
