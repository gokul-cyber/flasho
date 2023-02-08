import CreateEmail from '../../src/components/create-email/CreateEmail';

describe('CreateEmail Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<CreateEmail isEdit={true} setMessageTabState={() => {}} />);
    cy.viewport('macbook-16');
    cy.contains('Create a new Email').should('be.visible');
    cy.get('[data-cy="titleInput"]').type('abcde', { force: true });
    cy.get('[data-cy="subjectInput"]').type('abcde');
    cy.contains('English').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('English').click();
    cy.contains('button', 'Next').should('be.visible');
  });
});
