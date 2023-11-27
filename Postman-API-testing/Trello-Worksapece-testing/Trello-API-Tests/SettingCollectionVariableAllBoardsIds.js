pm.test('Setting collectionVarieble all existing boardsIDS', function () {

    const existingBoardsIds = response.map(board => board.id);
    pm.collectionVariables.set('existingBoardsIds', existingBoardsIds);
    console.log(existingBoardsIds);
});