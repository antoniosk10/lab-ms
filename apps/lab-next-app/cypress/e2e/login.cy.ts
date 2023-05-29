describe('Login process', () => {
  it('should show modal with login form', () => {
    cy.visit('/')

    cy.getByDataCy('signInButton').click()

    cy.get('input#email').should('be.visible')
    cy.get('input#password').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })

  it('should show ', () => {
    cy.visit('/')

    cy.getByDataCy('signInButton').click()

    cy.get('input:invalid').should('have.length', 2)

    cy.get('input#email').type('test')

    cy.get('input:invalid').should('have.length', 1)

    cy.get('button[type="submit"]').click()

    cy.get('#password')
      .invoke('prop', 'validationMessage')
      .should('equal', 'Please fill in this field.')
  })
})

export {}
