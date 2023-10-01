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

CookieStore.prototype.calculateSales = function () {
  for (let i = 0; i < hours.length; i++) {
    const hourCustomers = randomNumber(this.minCust, this.maxCust);
    this.customersPerHour.push(hourCustomers);

    const hourCookiesSold = Math.floor(hourCustomers * this.avgCookiesPerCust);
    this.cookiesPerHour.push(hourCookiesSold);

    this.totalCookieSold = this.totalCookieSold + hourCookiesSold;
  }
};

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

  const footer = document.querySelector("footer");
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

const form = document.getElementById("Newcookiestore");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const location = event.target.location.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgCookiesPerCust = event.target.avgCookiesPerCust.value;
  const customersPerHour = event.target.customersPerHour.value;
  const cookiesPerHour = event.target.cookiesPerHour.value;
  const totalCookieSold = event.target.totalCookieSold.value;

  const newCookieStore = new CookieStore(
    location,
    minCust,
    maxCust,
    avgCookiesPerCust,
    [],
    [],
    []
  );

  newCookieStore.render();
});
function renderTotalRow() {
  const oldTr = document.getElementById("totalrow");
  oldTr?.remove(); // ? means its won't run .remove() if oldTr is null (meaning it isn't on the page)

  const tr = document.createElement("tr");
  tr.setAttribute("id", "totalrow");

  const th = document.createElement("th");
  th.textContent = "Hourly Total";
  tr.appendChild(th);

  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;

    for (let k = 0; k < stores.length; k++) {
      hourlyTotal = hourlyTotal + stores[k].cookiesPerHour[i];
    }

    const td = document.createElement("td");
    td.textContent = hourlyTotal;
    tr.appendChild(td);
  }

  table.appendChild(tr);
}

renderTotalRow();
