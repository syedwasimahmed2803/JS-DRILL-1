const { inventory } = require("../data");
const { carModelsAlphabeticaOrder } = require("../problem3");
const car = carModelsAlphabeticaOrder(inventory);

// const printCars = car.map(x=> console.log(x.car_model))