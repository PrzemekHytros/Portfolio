pm.test('At least one available product exists', () => {
    const response = pm.response.json();

    pm.expect(response).to.be.an('array');
    pm.expect(response.length).to.be.above(0);

    const product = response[0];
    pm.expect(product).to.be.an('object');
    pm.expect(product).to.haveOwnProperty('id');
    pm.expect(product.id).to.be.a('number');
    pm.expect(product).to.haveOwnProperty('inStock');
    pm.expect(product.inStock).to.be.true;

    console.log(response[0].id);
    pm.expect(product.id).to.be.a('number');
    pm.collectionVariables.set('productId', product.id);
})