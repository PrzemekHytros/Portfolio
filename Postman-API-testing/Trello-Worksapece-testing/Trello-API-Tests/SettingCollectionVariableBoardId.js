pm.test('Setting collectionVarieble boardID', function () {
    const response = pm.response.json();
    console.log(response)
    pm.collectionVariables.set('boardId', response[0].id);
});