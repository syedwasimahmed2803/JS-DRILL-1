// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function carModelsAlphabeticaOrder(inventory) {
 const sortedCars = inventory.sort((car1, car2) => car1.car_model.localeCompare(car2.car_model));
 const printCars = inventory.map(carModel=> console.log(carModel.car_model))

  return printCars
}


module.exports = { carModelsAlphabeticaOrder };



