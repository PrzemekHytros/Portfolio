pm.test('TODO list is created', () =>{

    const response = pm.response.json();
    console.log(response);

    pm.expect(response.name).to.eql("TODO");
    pm.expect(response.closed).to.eql(false);
    pm.expect(response.idBoard).to.eql(pm.collectionVariables.get('boardId'));

});
