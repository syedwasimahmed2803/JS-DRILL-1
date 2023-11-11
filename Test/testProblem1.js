const { findCarInfo } = require("../problem1");
const { inventory } = require("../data");
const car = findCarInfo(inventory, 33);
console.log(
  `Car 33 is a ${car[0].car_year} ${car[0].car_make} ${car[0].car_model}`
);
