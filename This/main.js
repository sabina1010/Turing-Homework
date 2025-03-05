"use strict";

// Aşağıdakı tələblərə uyğun adlı obyekt yaradın və this açar sözünün istifadəsini 
// izah edən bir kod nümunəsi hazırlayın: obyektində aşağıdakı xüsusiyyətlər olsun:
// brand (string)
// model (string)
// year (number)
// getCarInfo() metodu– bu metod this istifadə edərək maşının markasını və modelini qaytarsın.
// updateYear(newYear) metodu – bu metod this istifadə edərək year dəyərini yeniləsin.
// displayInfo() metodu setTimeout içərisində this istifadəsini göstərsin.


let car = {
    brand: "Land Rover",
    model:"Range Rover Vogue",
    year: 2024,

    getCarInfo: function (){
        console.log(`this car is: ${this.brand} and ${this.model}`);
        
    },
    updateYear: function (newYear) {
        return this.year= newYear;
    },

    displayInfo: function () {
        console.log('loading...');
        
        setTimeout( function() {
            console.log(`this is ${this.brand} and ${this.model} and year is ${this.year}`);
            
        }, 2000);
    }
}


// car.getCarInfo();
// car.updateYear(2022);
// console.log(car.year);
car.displayInfo();



