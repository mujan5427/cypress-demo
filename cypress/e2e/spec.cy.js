// Written by BDD `should` assertion style.

describe('新增', () => {

  it('新增一筆待辦項目', () => {
    const todoItemInput = 'buy a cup of coffee'

    cy.visit('/todo_react_app')

    cy.get('[data-test-id="button-new"]')
      .click()

    cy.get('[data-test-id="column-title"]')
      .type(todoItemInput)

    cy.get('[data-test-id="button-create"]')
      .click()

    cy.get('[data-test-id="item-title"]')
      .should('have.text', todoItemInput)
  })
})

describe('讀取', () => {

  it('讀取一筆待辦項目', () => {
    const todoItemInput = 'buy a cup of coffee'

    cy.get('[data-test-id="item-title"]')
      .should('have.text', todoItemInput)
  })
})

describe('刪除', () => {

  it('刪除一筆待辦項目', () => {
    cy.get('[data-test-id="button-delete"]')
      .click()
  })

  it('待辦項目清單為空', () => {
    cy.get('[data-test-id="empty"]')
      .should('have.text', 'You have no tasks')
  })
})