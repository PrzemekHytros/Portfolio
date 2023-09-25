pm.test('Response has valid cartId', () => {

    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
    pm.expect(response).to.haveOwnProperty('cartId');
    pm.expect(response.cartId).to.be.a('string');
    
    console.log(response.cartId);
    pm.collectionVariables.set('cartId', response.cartId);
    
    })