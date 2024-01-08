// Pobierz kontener dla aktualności
const aktualnosciContainer = document.getElementById("aktualnosci-container");

// Funkcja do dodawania nowej aktualności
function dodajAktualnosc(tytul, tresc, data) {
    // Stwórz nowy element div dla aktualności
    const nowaAktualnosc = document.createElement("div");
    nowaAktualnosc.classList.add("aktualnosc-container");

    // Dodaj tytuł
    const tytulElement = document.createElement("h2");
    tytulElement.textContent = tytul;
    nowaAktualnosc.appendChild(tytulElement);

    // Dodaj treść
    const trescElement = document.createElement("p");
    trescElement.textContent = tresc;
    nowaAktualnosc.appendChild(trescElement);

    // Dodaj datę
    const dataElement = document.createElement("p");
    dataElement.classList.add("data");
    dataElement.textContent = "Data publikacji: " + data;
    nowaAktualnosc.appendChild(dataElement);

    // Dodaj aktualność do kontenera
    aktualnosciContainer.appendChild(nowaAktualnosc);
}

// Dodaj przykładowe aktualności
dodajAktualnosc("\"Luna ratuje świat\" już w marcu!", 

"W Nowym Roku startujemy z przytupem! Już w marcu tego roku dzięki platformie Amazon KDP poznacie Lunę. Śledźcie mój profil w najbliższym czasie po więcej szczegółów. A będzie się działo: darmowe rozdziały i konkursy z nagrodami!", 

"01 stycznia 2024");
// Dodaj kolejne aktualności analogicznie
dodajAktualnosc("\"Luna ratuje świat\" już w marcu!", 

"W Nowym Roku startujemy z przytupem! Już w marcu tego roku dzięki platformie Amazon KDP poznacie Lunę. Śledźcie mój profil w najbliższym czasie po więcej szczegółów. A będzie się działo: darmowe rozdziały i konkursy z nagrodami!", 

"01 stycznia 2024");

dodajAktualnosc("\"Luna ratuje świat\" już w marcu!", 

"W Nowym Roku startujemy z przytupem! Już w marcu tego roku dzięki platformie Amazon KDP poznacie Lunę. Śledźcie mój profil w najbliższym czasie po więcej szczegółów. A będzie się działo: darmowe rozdziały i konkursy z nagrodami!", 

"01 stycznia 2024");