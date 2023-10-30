function getRandomNumber(maxValue) {
    return Math.floor(Math.random() * maxValue);
}

pm.collectionVariables.set('randomQuantity', getRandomNumber(14));