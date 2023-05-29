Cypress.Commands.add('getByDataCy', (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args)
})

export {}
