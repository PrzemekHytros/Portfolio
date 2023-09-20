$(function() {
    $("#registrationForm").submit(function (event) {
    if (!$(this.name).val ()) {
        event.preventDefault();
        alert("Name is required.");
    }
    if (!$(this).find("input[name='gender']:checked").length) {
        event.preventDefault();
        alert("Gender is required.");
    }
    console.log($(this.name).val());
    });
});
