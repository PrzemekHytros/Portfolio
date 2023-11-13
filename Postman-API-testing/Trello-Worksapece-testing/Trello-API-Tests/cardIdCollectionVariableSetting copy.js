pm.test('Create card id in Collection Variable', () => {
    const response = pm.response.json();

    pm.collectionVariables.set('cardId', response.id);

})