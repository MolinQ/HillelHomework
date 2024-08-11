import { mount } from 'cypress/react18';
import App from "../../src/App.jsx";
describe('SwapiComponent', () => {
    beforeEach(() => {
        mount(<App />)
    })
    it('Check title ', function () {
        cy.get('h2').should(($h2) => {
            expect($h2).to.have.text('SWAPI Data')
        })
    });
});