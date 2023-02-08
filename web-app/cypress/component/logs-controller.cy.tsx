import LogsController from '../../src/components/logs-controller';

describe('LogsController Component', () => {
  it('should mount and works properly', () => {
    cy.mount(<LogsController />);
    cy.contains('button', 'Email Triggers').should('be.visible');
    cy.contains('button', 'SMS Triggers').should('be.visible');
  });
});
