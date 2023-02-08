import PreviewSMS from '../../src/components/create-sms/PreviewSMS';

describe('PreviewSMS Component', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <PreviewSMS
        smsTemplate={{ message_body: 'Hello' }}
        setMessageTabState={() => {}}
      />
    );
    cy.contains('Preview').should('be.visible');
    cy.get('[data-cy="backBtn"]').should('be.visible');
    cy.get('[data-cy="textArea"]').should('contain.value', 'Hello');
    cy.contains('button', 'Test').should('be.visible').click();
    cy.contains('Send a sample SMS to a test number').should('be.visible');
    cy.get('[data-cy="PNumber"]').type('9999999999');
    cy.contains('button', 'Send').should('be.visible');
    cy.get('[data-cy="closeTS"]').click();
    cy.contains('button', 'Submit').should('be.visible').click();
    cy.contains('Are you sure you want to continue?').should('be.visible');
    cy.contains(
      'This SMS will be sent to everyone in the selected audience.'
    ).should('be.visible');
    cy.contains('button', 'Confirm').should('be.visible');
    cy.get('[data-cy="closeSMS"]').click();
  });
});
