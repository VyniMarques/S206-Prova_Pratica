///<reference types="cypress"/>

describe('Testes Cypress Prova Prática', () => {
  
  //Teste 1
  it('Procurando um computador existente', () => {
    cy.visit('https://computer-database.gatling.io/computers/')
    cy.get('#searchbox').type('acer')
    cy.get('#searchsubmit').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('#main > h1').should('contain.text','Edit computer')
    
  })
  
  //Teste 2
  it('Pesquisando por computador inexistente', () => {
    cy.visit('https://computer-database.gatling.io/computers/')
    cy.get('#searchbox').type('zzz')
    cy.get('#searchsubmit').click()
    cy.get('em').should('have.text','Nothing to display')
  })

  //Teste 3
  it('Adicionando Computador', () => {
    let info = addComputador()
    cy.visit('https://computer-database.gatling.io/computers/')
    cy.get('#add').click()
    cy.get('#name').type(info[0])
    cy.get('#introduced').type(info[1])
    cy.get('#discontinued').type(info[2])
    cy.get('.primary').click()
    cy.get('.alert-message').should('contain.text','Done !')
  })

})

function addComputador(){
 
  let mes = new Date().getMonth().toString()
  let ano = new Date().getFullYear().toString()

  let name = ano + 'name'
  let introduced = ano + '-' + mes + '-' + '01'
  let discontinued = ano + '-' + mes + '-' + '02'
  let info_computador = [name, introduced, discontinued]

  return info_computador
}