
  

    pm.test('Card is created', () =>{

        const response = pm.response.json();
    
        pm.expect(response.name).to.eql('Sign-up for Trello');
        pm.expect(response.idList).to.eql(pm.collectionVariables.get('todoListId'));
        pm.expect(response.idBoard).to.eql(pm.collectionVariables.get('boardId'));
        pm.expect(response.badges.attachments).to.eql(0);
    
        pm.collectionVariables.set('cardId', response.id);
    
        })