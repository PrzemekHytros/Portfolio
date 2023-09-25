const response = pm.response.json();

pm.test('Status is Up', () => {
    pm.expect(response.status).to.eql('UP');
});

console.log(response.status);