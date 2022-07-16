describe("calculator tests", () => {
  it("should check that 7 + 9 = 16", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="7"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="9"]').click();
    cy.get("#input-screen").should("value", "7+9");
    cy.get('[value="="]').click();
    cy.get("#input-screen").should("value", "16");
  });

  it("should check that 8 - 5 = 3", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="8"]').click();
    cy.get('[value="-"]').click();
    cy.get('[value="5"]').click();
    cy.get("#input-screen").should("value", "8-5");
    cy.get('[value="="]').click();
    cy.get("#input-screen").should("value", "3");
  });

  it("should check that 3 * 4 = 12", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="3"]').click();
    cy.get('[value="x"]').click();
    cy.get('[value="4"]').click();
    cy.get("#input-screen").should("value", "3x4");
    cy.get('[value="="]').click();
    cy.get("#input-screen").should("value", "12");
  });

  it("should check that 6 / 2 = 3", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="6"]').click();
    cy.get('[value="/"]').click();
    cy.get('[value="2"]').click();
    cy.get("#input-screen").should("value", "6/2");
    cy.get('[value="="]').click();
    cy.get("#input-screen").should("value", "3");
  });

  it("should stop user from starting by entering multiple operators e.g. ++", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="+"]').click();
    cy.get("#input-screen").should("value", "");
    cy.get('[value="-"]').click();
    cy.get("#input-screen").should("value", "");
    cy.get('[value="x"]').click();
    cy.get("#input-screen").should("value", "");
    cy.get('[value="/"]').click();
    cy.get("#input-screen").should("value", "");
  });

  it("should stop user from entering one operator followed by another e.g 2++3", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="1"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="+"]').click();
    cy.get('[value="1"]').click();
    cy.get("#input-screen").should("value", "1+1");
    cy.get('[value="AC"]').click();
    cy.get('[value="1"]').click();
    cy.get('[value="-"]').click();
    cy.get('[value="-"]').click();
    cy.get('[value="1"]').click();
    cy.get("#input-screen").should("value", "1-1");
    cy.get('[value="AC"]').click();
    cy.get('[value="1"]').click();
    cy.get('[value="x"]').click();
    cy.get('[value="x"]').click();
    cy.get('[value="1"]').click();
    cy.get("#input-screen").should("value", "1x1");
    cy.get('[value="AC"]').click();
    cy.get('[value="1"]').click();
    cy.get('[value="/"]').click();
    cy.get('[value="/"]').click();
    cy.get('[value="1"]').click();
    cy.get("#input-screen").should("value", "1/1");
    cy.get('[value="AC"]').click();
    cy.get('[value="1"]').click();
    cy.get('[value="."]').click();
    cy.get('[value="."]').click();
    cy.get('[value="1"]').click();
    cy.get("#input-screen").should("value", "1.1");
  });

  it("should change negtive values to positive and viceversa e.g. 5 -> -5", () => {
    cy.visit("http://127.0.0.1:5501/index.html");
    cy.get('[value="5"]').click();
    cy.get('[value="+/-"]').click();
    cy.get("#input-screen").should("value", "-5");
    cy.get('[value="+/-"]').click();
    cy.get("#input-screen").should("value", "5");
  });
});
