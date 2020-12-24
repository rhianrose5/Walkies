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
    cy.get('#likeButton').click()

    //Then
    cy.get('#counter').should('be', 'Likes:')
  })
})
