import PreviewEmailTemplates from '../../../src/components/modals/PreviewEmailTemplate';

describe('PreviewEmailTemplates', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <PreviewEmailTemplates
        open={true}
        closeModal={() => {}}
        templateData={{}}
        handleUseTemplate={() => {}}
      />
    );
    cy.contains('p', 'Preview').should('be.visible');
    cy.contains('button', 'Use Template').should('be.visible');
    cy.get('[data-cy="desktopMode"]').should('be.visible');
    cy.get('[data-cy="mobileMode"]').should('be.visible');
  });
});
