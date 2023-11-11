const { inventory } = require("../data");
const { findCarInfo } = require("../problem2");

const car = findCarInfo(inventory)

console.log(`Last car is a ${car[0].car_make} ${car[0].car_model}`);