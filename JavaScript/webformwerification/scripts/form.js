$(function() {
    $("#registrationForm").submit(function (event) {
    if (!$(this.name).val ()) {
        event.preventDefault();
        alert("Podanie imienia jest wymagane.");
    }
    if (!$(this).find("input[name='gender']:checked").length) {
        event.preventDefault();
        alert("Gender is required.");
    }
    console.log($(this.name).val());
    });
});
