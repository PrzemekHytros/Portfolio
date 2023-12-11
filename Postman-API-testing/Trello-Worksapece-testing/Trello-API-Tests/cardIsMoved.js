pm.test("Card is moved", () => {

    const response = pm.response.json();
    pm.expect(response.name).to.eql("Sign-up for Trello");
    pm.expect(response.idList).to.eql(pm.collectionVariables.get("doneListId"));
    
    });