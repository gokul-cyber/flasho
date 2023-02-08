import AddPostgreSQL from '../../../src/components/modals/AddPostgreSQL';

describe('AddPostgreSQL Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(
      <AddPostgreSQL
        open={true}
        closeModal={() => {}}
        setIsReconfigure={() => {}}
        isReconfigure={false}
        isOnboarding={true}
      />
    );

    cy.contains('Connect your PostgreSQL database');

    //All input fields should work properly
    cy.get('[data-cy="hostInput"]').type('abcd');
    cy.get('[data-cy="databaseInput"]').type('abcd');
    cy.get('[data-cy="portInput"]').type('abcd');
    cy.get('[data-cy="userInput"]').type('abcd');
    cy.get('[data-cy="passwordInput"]').type('abcd');
    cy.get('[data-cy="addPostgres"]').should('be.visible');
  });
});
