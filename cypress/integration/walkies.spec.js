/// <reference types="cypress" />

describe('Visit walkies homepage test', () => {
  it('Vistits the walkies homepage to ensure that the navbar and title exist', () => {
    //Given
    cy.visit('https://walkies-app.herokuapp.com/')

    //Then
    cy.contains('Walkies')
  })
})

describe('Routes page without being logged in', () => {
  it('Visits the routes page without being logged in to ensure that the user cant leave a comment', () => {
    //Given
    cy.visit('https://walkies-app.herokuapp.com/walkingroutes/Glastonbury%20Tor')

    //Then
    cy.contains('Please create an account or log in to leave a comment.')
  })
})

describe('Like button on routes page', () => {
  it('Visits the routes page and hits like button', () => {
    //Given
    cy.visit('https://walkies-app.herokuapp.com/walkingroutes/Glastonbury%20Tor')

    //When
    //Click like button
    cy.get('#likeButton').click();

    //Then
    //Ensure that the like count is greater than one
    cy.get('#counter').invoke('text').then(parseFloat).should('be.gt', 1);
  })
})

describe('Map exists', () => {
  it('Map exists on the main page', () => {
    //Given
    cy.visit('https://walkies-app.herokuapp.com')

    //Then
    //The map exists
    cy.get('#map')
  })
})
