function getRandomEmail(domain) {
    let random = Math.random();
    random = Math.random().toString(36).substring(7) + '@' + domain;
    return random;
}

console.log(getRandomEmail('google.com'));