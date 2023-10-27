pm.test('Item was created', () => {

    const response = pm.response.json();
    pm.expect(response).to.be.an('object');
    pm.expect(response).to.haveOwnProperty('itemId');
    pm.expect(response.itemId).to.be.a('number');
    pm.expect(response.created).to.be.true;

    })