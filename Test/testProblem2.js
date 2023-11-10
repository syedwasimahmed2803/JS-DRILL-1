const { inventory } = require("../data");
const { findCarInfo } = require("../problem2");

const car = findCarInfo(inventory, inventory.length-1);

console.log(`Last car is a ${car.car_year} ${car.car_make}`)