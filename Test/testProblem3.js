const { inventory } = require("../data");
const { carModelsAlphabeticaOrder } = require("../problem3");
const print = carModelsAlphabeticaOrder(inventory)
.map(models=>console.log(models)) 
