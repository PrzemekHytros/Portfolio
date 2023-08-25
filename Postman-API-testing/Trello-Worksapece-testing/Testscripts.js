pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

var jsonData = pm.response.json();
pm.environment.set ("new_board_id", jsonData.id) ;

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("new4");
});

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("new3");
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.value).to.eql(100);
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
});

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});