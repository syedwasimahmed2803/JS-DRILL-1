const { inventory } = require("../data");
const { getCarYear } = require("../problem4");
const carYear = getCarYear(inventory);
  console.log(carYear)
module.exports = { carYear };