/// <reference types="cypress"/>

describe('Criando o cenário de teste para a pagina de campeões do site league of legends',( ) => {
 
  it('Caso de teste: Buscar um campeão existente', () => {

    cy.visit('https://www.leagueoflegends.com/pt-br/champions/')
    cy.wait(1500);
    cy.get('.osano-cm-accept').click()
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('Vayne')
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('{enter}')
    cy.get('[data-testid="list-0:name"]').should('have.text', 'Vayne')
    
  })

  it('Caso de teste: Buscar um campeão com 3 estrelas de dificuldade', () => {

    cy.visit('https://www.leagueoflegends.com/pt-br/champions/')
    cy.wait(1500);
    cy.get('.osano-cm-accept').click()
    cy.get('.style__NavDifficulty-z8uljj-7 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control > .dropdown__indicators').click()
    cy.get('#react-select-4-option-2').click()
    
  })

  it('Caso de teste: Buscar um campeão existente com a função de Assassino', () => {

    cy.visit('https://www.leagueoflegends.com/pt-br/champions/')
    cy.wait(1500);
    cy.get('.osano-cm-accept').click()
    cy.get('.style__RoleContainer-z8uljj-8 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control > .dropdown__indicators').click()
    cy.get('#react-select-3-option-0').click()
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('Zed')
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('{enter}')
    cy.get('.style__Name-n3ovyt-2').should('have.text', 'Zed')
    
  })

  it('Caso de teste: Buscar um campeão existente com a função de Assassino', () => {

    cy.visit('https://www.leagueoflegends.com/pt-br/champions/')
    cy.wait(1500);
    cy.get('.osano-cm-accept').click()
    cy.get('.style__RoleContainer-z8uljj-8 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control > .dropdown__indicators').click()
    cy.get('#react-select-3-option-3').click()
    cy.get('.style__NavDifficulty-z8uljj-7 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control > .dropdown__indicators').click()
    cy.get('#react-select-4-option-1').click()
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('Kalista')
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('{enter}')
    cy.get('.style__Name-n3ovyt-2').should('have.text', 'Kalista')

  })

  it('Caso de teste: Buscar um campeão inexistente', () => {

    cy.visit('https://www.leagueoflegends.com/pt-br/champions/')
    cy.wait(1500);
    cy.get('.osano-cm-accept').click()
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('Zeus')
    cy.get('.dropdown__menu-notice').should('be.visible')

  })

  it('Caso de teste: Buscar um campeão existente com uma função que não pertence a ele', () => {

    cy.visit('https://www.leagueoflegends.com/pt-br/champions/')
    cy.wait(1500);
    cy.get('.osano-cm-accept').click()
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('Lee Sin')
    cy.get('.style__NavSearch-z8uljj-6 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control').type('{enter}')
    cy.get('.style__RoleContainer-z8uljj-8 > .style__Dropdown-m9dluh-0-StateManager > .dropdown__control > .dropdown__indicators').click()
    cy.get('#react-select-3-option-2').click()
    cy.get('.style__Message-sc-13btjky-1').should('have.text', 'Nenhum Campeão corresponde ao critério do filtro.')

  })

})
