pm.test('Caledar view type is disabled', () => {

    const response = pm.response.json();
    console.log(response);
    pm.expect(response.prefs.switcherViews[2].enabled).to.be.eql(false);
});
