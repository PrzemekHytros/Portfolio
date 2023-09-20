pm.test("Status code is 401", function () {
    pm.response.to.have.status(401);
});

pm.test("Error message", () => {
    const response = pm.response.json();
    pm.expect(response.error).to.eql('Missing Authorization header.');
});