import { mount } from "cypress/react18";
import App from "../../src/App.jsx";

describe('Warning text', () => {
  beforeEach(() => {
    mount(<App />)
  });

  it('should display an error message when the Add button is clicked without input', () => {
    cy.get('input.form-control')
        .clear()

    cy.get('button.btn-outline-secondary').click();

    cy.on('window:alert', (text) => {
      expect(text).to.contains('Введіть коректно данні для запиту');
    });
  });
});