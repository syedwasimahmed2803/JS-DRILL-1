// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function carModelsAlphabeticaOrder(inventory) {
  const carModels = [];

  for (let i = 0; i < inventory.length; i++) {
    carModels.push(inventory[i].car_model.toLocaleUpperCase());
  }
  carModels.sort();
//   carModels.sort(function (a, b) {
//     return a.toLowerCase().localeCompare(b.toLowerCase());
// });

  for (let i = 0; i < carModels.length; i++) {
    console.log(carModels[i]);
  }
}


module.exports = { carModelsAlphabeticaOrder };

// function sortCarModels(inventory) {
//     return inventory.sort((a, b) => {
//       let modelA = a.car_model.toUpperCase();
//       let modelB = b.car_model.toUpperCase();
//       if (modelA < modelB) {
//         return -1;

//       }
//       if (modelA > modelB) {
//         return 1;
//       }
//       return 0;
//     });
//   }

//   let sortedCars = sortCarModels(inventory);
//   for(let i=0;i<sortedCars.length;i++){
//     console.log(sortedCars[i].car_model);
//   }

