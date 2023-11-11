// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
("Last car is a *car make goes here* *car model goes here*");

function findCarInfo(inventory) {
    const car=[]
    const carId = inventory.reduce(function(acc,curr){
        return curr;
    })
    car.push(carId)
    console.log(`Last car is a ${car[0].car_make} ${car[0].car_model}`);
}

module.exports = { findCarInfo };

