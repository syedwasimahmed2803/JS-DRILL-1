const { findCarInfo } = require("../problem1");

const car = findCarInfo(33);
console.log(
  `Car 33 is a ${car.car_year} ${car.car_make} ${car.car_model}`
);
