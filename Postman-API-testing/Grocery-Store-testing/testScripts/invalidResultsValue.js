pm.test("Error Message", () => {
    const response = pm.response.json();
    const expectedError = "Invalid value for query parameter 'results'. Cannot be greater than 20.";
    pm.expect(response.error).to.eql(expectedError);
});