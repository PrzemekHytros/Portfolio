

const response = pm.response.json();

pm.test('correct product was retrieved', () => {
    pm.expect(response.id).to.eql(pm.collectionVariables.get('productId'));
});