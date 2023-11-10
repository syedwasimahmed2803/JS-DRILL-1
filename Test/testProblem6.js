const { inventory } = require("../data");
const { getCarByName } = require("../problem6");

const BMWAndAudi = getCarByName(inventory);
console.log(BMWAndAudi)