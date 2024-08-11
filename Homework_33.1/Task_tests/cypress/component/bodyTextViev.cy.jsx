import { mount } from "cypress/react18";
import App from "../../src/App.jsx";


describe('correct data fetch', () => {
    beforeEach(() => {
        mount(<App />);
    });

    it('should add a new item to the list with the correct text', () => {
        const newText = 'people/1/';

        cy.get('input.form-control').type(newText);

        cy.get('button.btn-outline-secondary').click();

        cy.get('pre')
    });
});