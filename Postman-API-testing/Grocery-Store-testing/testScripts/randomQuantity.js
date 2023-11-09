function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

pm.environment.set('randomQuantity', getRandomNumber(14));