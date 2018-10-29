function produceDrivingRange(number) {
  return function inRange(loc1, loc2) {
    range = parseInt(loc2.slice(0,2)) - parseInt(loc1.slice(0,2))
    return range > number ? `${range - number} blocks out of range` : `within range by ${number - range}`
  }
}

function produceTipCalculator(fraction) {
  return function calculateTip(bill) {
    return bill * fraction
  }
}

function createDriver () {
  driverId = 1
  return class {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
