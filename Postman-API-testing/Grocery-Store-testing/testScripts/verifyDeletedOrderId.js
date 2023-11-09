pm.test('Error message contains the deleted order id.', () => {
    
    const response = pm.response.json();
    pm.expect(response).to.haveOwnProperty('error');
    pm.expect(response.error).to.contain(pm.environment.get('orderId'));
});


