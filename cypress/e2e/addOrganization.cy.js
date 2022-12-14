/// <reference types="Cypress" />

import { loginPage } from "../../cypress/page_objects/login";
import { addOrganizationPage } from "../page_objects/addOrganization";

describe("add organization test", () => {
    before("visit vivify scrum", () => {
        cy.visit("/login");
        loginPage.login(Cypress.env("userEmail"), Cypress.env("userPassword"));
        cy.url().should("include", "/my-organizations");
        addOrganizationPage.addOrganizationButton.click();
    });

    it("add organization with valid data", () => {
       addOrganizationPage.addOrganization("Viki");
    });

});