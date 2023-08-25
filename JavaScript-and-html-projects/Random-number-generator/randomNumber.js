function getRandomNumber(maxValue) {
    let random = Math.random() * maxValue;
    random = Math.floor(random);
    return random;
}

console.log(getRandomNumber(100));