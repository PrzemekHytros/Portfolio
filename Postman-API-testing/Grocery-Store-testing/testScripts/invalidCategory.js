pm.test("Error message", () => {
    const response = pm.response.json();
    pm.expect(response.error).to.eql("Invalid value for query parameter 'category'. Must be one of: meat-seafood, fresh-produce, candy, bread-bakery, dairy, eggs, coffee")
});