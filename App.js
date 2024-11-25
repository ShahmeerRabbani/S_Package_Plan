function Plan(name, price, space, storage, domain, support, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.storage = storage;
  this.domain = domain;
  this.support = support;
  this.discountMonths = discountMonths;

  this.NewFunc = function ([...plans]) {
    var packages = document.querySelectorAll(".package_box");
    for (let i = 0; i < packages.length; i++) {
      packages[i].innerHTML = `
              <div class="package_name">
                <p>${plans[i].name}</p>
                <p><span>$${plans[i].price}</span>/month</p>
              </div>
              <div class="package_desc">
                <ul>
                  <li>${plans[i].space}GB Storage</li>
                  <li>${plans[i].storage}GB Bandwidth</li>
                  <li>${plans[i].domain} Domain</li>
                  <li>${plans[i].support} Support</li>
                </ul>
              </div>
              <div class="package_btn">
                <button class='btn-get-started'>Get Started</button>
              </div>
              `;

      const button = packages[i].querySelector(".btn-get-started"); // Select the button within the current package
      button.addEventListener("click", () => {
       var bool = confirm(`Are you want to Proceed ${plans[i].name} Plan?`)
        if(bool){
            alert(`You selected the ${plans[i].name} plan!`);
            return
        }
      });
    }
  };
}

Plan.prototype.calcAnnual = function (percentIfDisc) {
  var bestPrice = this.price;

  var currDate = new Date();
  var thisMo = currDate.getMonth();
  for (var i = 0; i < this.discountMonths.length; i++) {
    if (this.discountMonths[i] === thisMo) {
      bestPrice = this.price * percentIfDisc;
      break;
    }
  }
  return bestPrice * 12;
};

var p1 = new Plan("Basic", 5, 10, 100, 1, "Email", [6, 7]);
var p2 = new Plan("Pro", 15, 50, 500, 5, "Email + Phone", [6, 7, 11]);
var p3 = new Plan(
  "Business",
  25,
  "Ultimate",
  "Ultimate",
  "Ultimate",
  "24/7 Support",
  [6, 7]
);

var annualPrice = p1.calcAnnual(0.9);
var annualPrice1 = p2.calcAnnual(0.85);
var annualPrice2 = p3.calcAnnual(0.7);

console.log(annualPrice, annualPrice1, annualPrice2);

p1.NewFunc([p1, p2, p3]);
