

pm.test('Created order is in the list', () =>{
    
    const response = pm.response.json();
    let isOrderIdInResponse = false;
    response.forEach((order) => {
    
        if(order.id === pm.environment.get('orderId')) {
            console.log('Found It!');
            isOrderIdInResponse = true;
        }
 
    });
    pm.expect(isOrderIdInResponse).to.be.true;

});