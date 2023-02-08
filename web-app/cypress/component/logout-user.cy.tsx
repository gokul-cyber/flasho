import LogoutUser from '../../src/components/logout-user';

describe('LogoutUser Component', () => {
  it('should mount and works properly', () => {
    cy.mount(<LogoutUser />);
    cy.contains('p', 'Logout').should('be.visible');
    cy.contains(
      'p',
      'By logging out you will be clearing your admin secrets. You can enter again by entering the admin secret.'
    ).should('be.visible');
    cy.contains('button', 'Logout').should('be.visible');
  });
});
