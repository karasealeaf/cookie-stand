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
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const seattle = {
  location: "seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calculateSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(randNum * this.avgCookiesPerCust);
    }
  },
};

seattle.calculateSales();
console.log(seattle);

const salesData = document.getElementById("salesData");

const article = document.createElement("article");

const h2 = document.createElement("h2");
h2.textContent = seattle.calculateSales;
article.appendChild(h2);

const p = document.createElement("p");
p.textContent = `${seattle.calculateSales} is ${seattle.cookiesPerHour} avergeing ${seattle.avgCookiesPerCust}`;
article.appendChild(p);

const ul = document.createElement("ul");
for (let i = 0; i < seattle.calculateSales.length; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.calculateSales[i];
  ul.appendChild(li);
}
article.appendChild(ul);
