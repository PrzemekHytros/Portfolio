pm.test('Board is created', () => {

    const response = pm.response.json();
    pm.expect(response.name).to.be.eql("Learning Postman");
    pm.expect(response.closed).to.be.eql(false);
});
