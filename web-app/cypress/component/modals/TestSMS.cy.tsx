import TestSMS from '../../../src/components/modals/TestSMS';

describe('TestSMS Component', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <TestSMS open={true} closeModal={() => {}} smsTemplate={() => {}} />
    );
    cy.contains('Send a sample SMS to a test number').should('be.visible');
    cy.contains('Test Phone Address').should('be.visible');
    cy.get('[data-cy="PNumber"]').type('1234567890');
    cy.contains('button', 'Send').should('be.visible');
  });
});
