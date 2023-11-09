if (pm.environment.name === 'Testing') {


pm.test("Status code is 400", function() {
    pm.response.to.have.status(400);

});

pm.test("Error Message", () => {
    const response = pm.response.json();
    pm.expect(response.error).to.eql("Invalid value for query parameter 'results'. Must be greater than 0.");
});

};