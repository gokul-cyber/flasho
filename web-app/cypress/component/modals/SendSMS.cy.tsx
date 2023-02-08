import SendSMS from '../../../src/components/modals/SendSMS';

describe('SendSMS Component', () => {
  it('should mount and works properly', () => {
    cy.mount(<SendSMS open={true} />);
    cy.contains('Are you sure you want to continue?').should('be.visible');
    cy.contains(
      'This SMS will be sent to everyone in the selected audience.'
    ).should('be.visible');
    cy.contains('button', 'Confirm').should('be.visible');
  });
});
