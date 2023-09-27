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

const table = document.getElementById("salesData");

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CookieStore(
  location,
  minCust,
  maxCust,
  avgCookiesPerCust,
  customersPerHour,
  cookiesPerHour,
  totalCookieSold
) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = [];
  this.cookiesPerHour = [];
  this.totalCookieSold = 0;
}

CookieStore.prototype.calculateSales = function () {};

for (let i = 0; i < hours.length; i++) {
  const hourCustomers = randomNumber(this.minCust, this.maxCust);
  this.customersPerHour.push(hourCustomers);

  const hourCookiesSold = math.floor(hourCustomers * this.avgCookiesPerCust);
  this.cookiesPerHour.push(hourCookiesSold);

  this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
}

CookieStore.prototype.render = function () {
  this.calculateSales();

  const tr = document.createElement("tr");

  const th = document.createElement("th");
  th.textContent = this.location;

  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesPerHour[i];
    tr.appendChild(td);
  }
  const totalTd = document.createElement("td");
  totalTd.textContent = this.totalCookieSold;
  tr.appendChild(totalTd);
  table.appendChild(tr);
};

const seattle = new CookieStore("Seattle", 23, 65, 6.3, [], [], 0);

const tokyo = new CookieStore("Seattle", 3, 24, 1.2, [], [], 0);

const dubai = new CookieStore("Dubai", 11, 38, 3.7, [], [], 0);

const paris = new CookieStore("Paris", 20, 38, 2.3, [], [], 0);

const lima = new CookieStore("Lima", 2, 16, 4.6, [], [], 0);

const headerRow = document.createElement("tr");
const blankTd = document.createElement("td");
headerRow.appendChild(blankTd);

for (let i = 0; i < hours.length; i++) {
  const th = document.createElement("th");
  th.textContent = hours[i];
  headerRow.appendChild(th);
}

const totalHeading = document.createElement("th");
totalHeading.textContent = "Total";
headerRow.appendChild(totalHeading);

table.appendChild(headerRow);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
