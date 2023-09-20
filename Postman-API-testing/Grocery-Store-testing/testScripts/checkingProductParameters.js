pm.test("Status code is 200", () => {
    pm.response.to.have.status(200);
});

pm.test("Product name", () => {
    const response = pm.response.json();
    pm.expect(response.name).to.eql('Starbucks Coffee Variety Pack, 100% Arabica');
});

pm.test("Product price", () => {
    const response = pm.response.json();
    pm.expect(response.price).to.eql(40.91);
});

pm.test("Is in stock", () => {
    const response = pm.response.json();
    pm.expect(response.inStock).to.eql(true);
})