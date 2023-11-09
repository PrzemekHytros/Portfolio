

pm.test('Created order is in the list', () =>{
    const response = pm.response.json();
    let isOrderIdInResponse = false;
    
    for ( i = 0; i < response.length; i++) {
        if(response[i].id === pm.environment.get('orderId')) {
            console.log('Found It!');
            isOrderIdInResponse = true;
        }
 
    }
    pm.expect(isOrderIdInResponse).to.be.true;

});