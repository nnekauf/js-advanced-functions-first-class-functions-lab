// Code your solution in this file!

function returnFirstTwoDrivers(driverArray) {
    const firstTwoDrivers =  driverArray.slice(0 , 2)
    return firstTwoDrivers
};

function returnLastTwoDrivers(driverArray) {
    const lastTwoDrivers = driverArray.slice(Math.max(driverArray.length - 2, 0))
    return lastTwoDrivers
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(integer) {
      return integer * integer  
    }
    
};

function fareDoubler(integer) {
    return integer * 2
    
};

function fareTripler(integer) {
    return integer * 3
    
};

function selectDifferentDrivers(array, fn) {
    return fn(array)
    
};