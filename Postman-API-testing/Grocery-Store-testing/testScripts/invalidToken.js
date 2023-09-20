pm.test('Error message', () => {
    const response = pm.response.json();
    pm.expect(response.error).to.eql('Invalid bearer token.');
})