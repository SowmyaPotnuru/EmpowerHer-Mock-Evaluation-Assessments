const displayCar = item =>{
  console.log(`The vehicle that I drive is ${item}`)
}
const displayTruck = item => {
  console.log(`The vehicle that I drive is ${item}`)
}
const displayBike = item => {
  console.log(`The vehicle that I drive is ${item}`)
}

function vehicleInfo(vehicleCategory, callbackFn){
  callbackFn(vehicleCategory);
}


vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
