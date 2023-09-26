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

function City(
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
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookieSold = totalCookieSold;
  function calculateSales() {
    for (let i = 0; i < hours.length; i++) {
      const hourCustomers = randomNumber(this.minCust, this.maxCust);
      this.customersPerHour.push(hourCustomers);
      const hourCookiesSold = math.floor(
        hourCustomers * this.avgCookiesPerCust
      );
      this.cookiesPerHour.push(hourCookiesSold);
      this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
    }
  }

  this.calculateSales();
}

City.prototype.render = function () {
  const shopSales = document.getElementById("shopSales");

  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = City.calculateSales;
  article.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = `${City.calculateSales} is ${City.cookiesPerHour} avergeing ${City.avgCookiesPerCust}`;
  article.appendChild(p);

  const salesData = document.getElementById("salesData");

  const ul = document.createElement("ul");
};

const seattle = new City("Seattle", 23, 65, 6.3, [], [], 0);

const tokyo = new City("Seattle", 3, 24, 1.2, [], [], 0);

const dubai = new City("Dubai", 11, 38, 3.7, [], [], 0);

const paris = new City("Paris", 20, 38, 2.3, [], [], 0);

const lima = new City("Lima", 2, 16, 4.6, [], [], 0);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
