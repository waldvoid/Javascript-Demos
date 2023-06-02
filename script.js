function Car(brand, year, type, gear) {
    // field creation
    this.brand = brand;
    this.year = year;
    this.type = type;
    this.gear = gear;

    // getter & setters
    this.getBrand = function() { return `This car's brand is ${brand}`; }
    this.getYear = function() { return `This car's model year is ${year}`; }
    this.getType = function() { return `This car's type is ${type}`; }
    this.getGear = function() { return `This car's gear type is ${gear}`; }
    this.setBrand = function(brand) { this.brand = brand; }
    this.setYear = function(year) { this.year = year; }
    this.setType = function(type) { this.type = type; }
    this.setGear = function(gear) { this.gear = gear; }

}

const car1 = new Car("Audi", 2011, "Sedan", "Auto");
console.log(car1);
console.log(car1.getBrand());
console.log(car1.getYear());
console.log(car1.getType());
console.log(car1.getGear());
console.log(car1.brand);
car1.setBrand("BMW");
console.log(car1.brand);