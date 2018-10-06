describe('Random people stuff', () => {
  beforeEach(() => {
    cy.server();
    cy.route('/api/people', 'fixture:people.json');
    cy.route('PUT', '/api/people/**', {});
    cy.visit('/');
  });

  it('can decrement a degree', () => {
    cy.get(':nth-child(1) > div > .btn-dec').click();
    cy.get(':nth-child(1) > div > .counter-value').should('contain', '-1');
  });

  it('can increment a degree', () => {
    cy.get(':nth-child(1) > div > .btn-dec').click();
    cy.get(':nth-child(1) > div > .counter-value').should('contain', '1');
  });
});
