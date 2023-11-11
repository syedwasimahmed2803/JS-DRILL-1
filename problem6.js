// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function getCarByName(inventory){
    const BMWAndAudi = inventory.filter(carMake=>carMake.car_make=="BMW"||carMake.car_make=="Audi");
    return JSON.stringify(BMWAndAudi, null, 1)
}
module.exports = { getCarByName };