import DraftSMS from '../../src/components/create-sms/DraftSMS';

describe('DraftSMS Component', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <DraftSMS
        setMessageTabState={() => {}}
        smsTemplate={{}}
        setSmsTemplate={() => {}}
        primaryVariables={[]}
        derivedVariables={[]}
      />
    );
    cy.contains('Draft and Send').should('be.visible');
    cy.contains('button', 'Submit').should('be.visible');
    cy.get('[data-cy="backBtn"]').should('be.visible');
    cy.contains('button', 'Preview').should('be.visible');
    cy.contains('button', 'Test').should('be.visible');
    cy.contains('button', 'Add Variables').should('be.visible');
    cy.get('[data-cy="typeMessage"]').type('Hello Everyone...');
  });
});
