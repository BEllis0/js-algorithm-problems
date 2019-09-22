// Return a new array that transforms the elements' average altitude 
//into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// The values should be rounded to the nearest whole number. 
//The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, 
//and the GM value of earth is 398600.4418 km3s-2.


function orbitalPeriod(arr) {
  
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    let obj = [];
  
    for (let i = 0; i < arr.length; i++) {
      let radius = earthRadius + arr[i].avgAlt
      let orbitalPeriod = Math.round(Math.sqrt(Math.pow(radius, 3) / GM) * (2 * Math.PI));
      obj.push({"name": arr[i].name, "orbitalPeriod": orbitalPeriod})
    }
    return obj;
  }
  
  console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));