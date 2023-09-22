const response = pm.response.json();
console.log(response[0].id);
pm.collectionVariables.set('productId', response[0].id);