const response = pm.response.json();

console.log(response.other["social-media"]);

pm.test("Person is Jane", () => {
    pm.expect(response.name).to.eql("Jane");
    pm.expect(response.age).to.eql(29);
    pm.expect(response.other.email).to.eql("jane@example.com");
    pm.expect(response.other["social-media"][1]).to.include("Instagram");
    
});