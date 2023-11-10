// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.
function getCarYear(inventory) {
    const carYear = [];
  
    for (let i = 0; i < inventory.length; i++) {
        carYear.push(inventory[i].car_year);
    }
  
    // for (let i = 0; i < carYear.length; i++) {
    //   console.log(carYear[i]);
    // }
    return carYear;
}
  module.exports =  {getCarYear} ;

