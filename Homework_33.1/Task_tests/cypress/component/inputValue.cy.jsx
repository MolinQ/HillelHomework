import {mount} from "cypress/react18";
import App from "../../src/App.jsx";

describe('Text Input Field Test', () => {
    beforeEach(() => {
        mount(<App />)
    });

    it('should allow entering both letters and numbers', () => {
        cy.get('input')
            .type('Test123')
            .should('have.value', 'Test123');

        cy.get('input')
            .clear() // Очищуємо поле
            .type('OnlyLetters')
            .should('have.value', 'OnlyLetters');

        cy.get('input')
            .clear()
            .type('123456')
            .should('have.value', '123456');
    });
});