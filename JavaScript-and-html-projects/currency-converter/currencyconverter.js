const rateFromUsdToPln = 3.90;
const rateFromGbptpPln = 5.00;
const valueUSD = 150;
const valueGbp = 300;

pln = valueUSD * rateFromUsdToPln;
console.log('Dollars value is: ', pln);

pln = valueGbp * rateFromGbptpPln;
console.log('Funts value is: ', pln);