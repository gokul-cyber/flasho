import TestEmail from '../../../src/components/modals/TestEmail';

describe('TestEmail Component', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <TestEmail
        open={true}
        closeModal={() => {}}
        submit={() => {}}
        submitLoading={false}
      />
    );
    cy.contains('Send a sample Email to a test email address').should(
      'be.visible'
    );
    cy.contains('Test Email Address').should('be.visible');
    cy.get('[data-cy="emailInput"]').type('abc@xyz.com');
    cy.contains('button', 'Send').should('be.visible');
  });
});
