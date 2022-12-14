Cypress.Commands.add("loginViaBE", () => {
    cy.request(
        "POST",
        "https://cypress-api.vivifyscrum-stage.com/api/v2/login",
        {
            email:"viki.verebes90@gmail.com",
            password:"Marci@90",
            "g-recaptcha-response":""
        }
    ).its('body').then(response => {
        console.log("RESPONSE", response);
        window.localStorage.setItem("token", response.token);
    });
    
});