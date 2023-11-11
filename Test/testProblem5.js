const { inventory } = require("../data");
const { getCarYear } = require("../problem4");
const { getCarAge } = require("../problem5");

const carYears = getCarYear(inventory);
const olderCars = getCarAge(carYears);
console.log(olderCars);
console.log("Number of cars made before 2000:", olderCars.length);