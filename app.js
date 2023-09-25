const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
function randomNumber(min, max) {
  return Math.floor(math.random() * (max - min + 1)) + min;
}
const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calcCustPerHour: function () {
    // add a random number to the customersPerHour array
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};
seattle.calcCustPerHour();
console.log(seattle);

// console.log("Hello World");

// const shop = {
//   name: ['Seattle', 'Tokyo','Dubai','Paris','Lima'],
//   hours: [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
//   max: [16,38,24,65],
//   min:[2,3,11,20,23]

//   avgCookies: function(avgCookies) {
// for (i = 0; i < hours.length; i++) {
//   this.avgCookies = [i];
// }
//   }
// }

// function generateRandom(maxLimit = 100){
//   let rand = Math. random() * maxLimit;
//   console. log(rand); // say 99.81321410836433.
//   ​
//   rand = Math. floor(rand); // 99.
//   ​
//   return rand;
//   }

// Objects/Math/random{:target="_blank"};

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies
