pm.test('Order was created', () => {

    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
    pm.expect(response.created).to.be.true;
    pm.expect(response.orderId).to.be.a('string')

    })