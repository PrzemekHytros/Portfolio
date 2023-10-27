
pm.test('Created order is in the list', () =>{
    const response = pm.response.json();
    
    let order = response.find((order) => order.id === pm.collectionVariables.get('orderId'));
  
    console.log(order);

    pm.expect(order).to.be.an('object'); 

 
});