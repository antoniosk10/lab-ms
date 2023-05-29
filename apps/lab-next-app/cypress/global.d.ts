/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByDataCy(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>
  }
}
