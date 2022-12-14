/// <reference types="Cypress" />

import { loginPage } from "../../cypress/page_objects/login";

describe("login test", () => {
    before("visit vivify scrum", () => {
        cy.visit("/login");
    });

    it("login with valid credentials", () => {
       loginPage.login("viki.verebes90@gmail.com", "Marci@90");
    });

});