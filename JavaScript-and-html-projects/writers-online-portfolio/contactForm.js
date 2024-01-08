function validateForm() {
    var name = document.getElementById("my-name").value;
    var email = document.getElementById("my-email").value;
    var message = document.getElementById("my-message").value;

    if (name === "" || email === "" || message === "") {
        alert("Wszystkie pola muszą być wypełnione");
        return false;
    }

    // Dodatkowa walidacja adresu email (możesz dostosować według potrzeb)
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Wprowadź poprawny adres email");
        return false;
    }

    // Możesz dodać więcej warunków walidacji według potrzeb

    // Zwraca true, jeśli formularz jest poprawny
    return true;
}