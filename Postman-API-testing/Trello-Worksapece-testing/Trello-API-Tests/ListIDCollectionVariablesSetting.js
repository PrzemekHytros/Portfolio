pm.test('Create listId in Collection Variable', () => {
    const response = pm.response.json();

    pm.collectionVariables.set('todoListId', response.id);

})