const response = pm.response.json();

// console.log(response.other["social-media"][1]);

const person = response.find(item => item.name === "Jane");

console.log(person);


pm.test("Person is Jane", () => {
    pm.expect(person.name).to.eql("Jane");
    pm.expect(person.age).to.eql(29);
    pm.expect(person.other.email).to.eql("jane@example.com");
    pm.expect(person.other["social-media"]).to.include("Instagram");
});