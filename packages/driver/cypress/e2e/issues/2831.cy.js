describe('page', () => {
  context('after click clicks', () => {
    it('passes', () => {
      cy.visit('https://example.cypress.io').then(() => {
        expect(false).to.be.false
      })
    })

    after(() => {
      cy.get('.home-list')
      .contains('Querying').click()

      cy.url().should('include', '/querying')
    })
  })

  context('after click does not click', () => {
    it('fails', () => {
      cy.visit('https://example.cypress.io').then(() => {
        expect(false).to.be.true
      })
    })

    after(() => {
      cy.get('.home-list')
      .contains('Querying').click()

      cy.url().should('include', '/querying')
    })
  })
})
