pm.test('Calendar view type is disabled', () => {
    const response = pm.response.json();
    const calendarView = response.prefs.switcherViews.find(view => view.viewType === 'Calendar');
    pm.expect(calendarView).to.be.an('object');
    pm.expect(calendarView.enabled).to.be.false;
});
