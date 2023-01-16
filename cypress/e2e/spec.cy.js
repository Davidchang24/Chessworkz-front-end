describe("Render home page", () => {
  it("Renders home page correctly", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".navbar-brand").should("be.visible");
    cy.get('[href="/courses"]').should("be.visible");
    cy.get('[href="/tools"]').should("be.visible");
  });
});

describe("Navigation bar links", () => {
  it("Nav bar works correcty", () => {
    cy.visit("http://localhost:3000/");
    cy.get(".navbar-brand").click();
    cy.get('[href="/courses"]').click();
    cy.get('[href="/tools"]').click();
    cy.get("cg-board").click();
  });
});

describe("Follow course", () => {
  it("Following a course works correctly", () => {
    cy.visit("https://chessworkz-frontend.azurewebsites.net/");
    cy.get(":nth-child(1) > .card-body > :nth-child(3) > button").click();
    cy.contains("Follow has been saved").should("be.visible");
  });
});
