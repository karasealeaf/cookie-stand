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

function Shops(
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

Shops.prototype.render = function () {
  const shopSales = document.getElementById("shopSales");

  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.textContent = shops.calculateSales;
  article.appendChild(h2);

  const p = document.createElement("p");
  p.textContent = `${shops.calculateSales} is ${shops.cookiesPerHour} avergeing ${shops.avgCookiesPerCust}`;
  article.appendChild(p);

  const salesData = document.getElementById("salesData");

  const ul = document.createElement("ul");
  for (let i = 0; i < Shops.calculateSales.length; i++) {
    const li = document.createElement("li");
    li.textContent = Shops.calculateSales[i];
    ul.appendChild(li);

    shopSales.appendChild(ul);
  }

  const seattle = new Shops("Seattle", 23, 65, 6.3, [], [], 0);

  const tokyo = new Shops("Seattle", 3, 24, 1.2, [], [], 0);

  const dubai = new Shops("Dubai", 11, 38, 3.7, [], [], 0);

  const paris = new Shops("Paris", 20, 38, 2.3, [], [], 0);

  const lima = new Shops("Lima", 2, 16, 4.6, [], [], 0);

  seattle.render();
  tokyo.render();
  dubai.render();
  paris.render();
  lima.render();
};
