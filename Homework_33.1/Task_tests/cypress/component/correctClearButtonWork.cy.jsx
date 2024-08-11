import { mount } from "cypress/react18";
import App from "../../src/App.jsx";

describe('Clear Button Test', () => {
    beforeEach(() => {
        mount(<App />);
    });

        it('Clear button work correct', () => {
            const newText = 'people/1/';

            cy.get('input.form-control').type(newText);

            cy.get('button.btn-outline-secondary').click();

            cy.wait(500)

            cy.get('button.btn-danger').click();

            cy.get('p')
        });
});