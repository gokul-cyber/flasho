import AddAmazonSES from '../../../src/components/modals/AddAmazonSES';

describe('AddAmazonSES Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(
      <AddAmazonSES
        open={true}
        closeModal={() => {}}
        isReconfigure={false}
        isOnboarding={true}
        setIsReconfigure={() => {}}
        setIsSkip={() => {}}
      />
    );
    cy.contains('Connect your Amazon SES');
    cy.get('[name="aws_access_key_id"]').type('abcd');
    cy.get('[name="aws_secret_access_key"]').type('abcd');
    cy.get('[name="source_email_address"]').type('abcd');
    cy.contains('Select Region').click({ force: true });
    cy.contains('us-east-1').trigger('click', { force: true });
    cy.get('[data-cy="connectSES"]').should('be.visible');
  });
});
