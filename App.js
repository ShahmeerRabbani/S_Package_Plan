function Plan(name, price, space, storage, domain, support, discountMonths) {
  this.name = name;
  this.price = price;
  this.space = space;
  this.storage = storage;
  this.domain = domain;
  this.support = support;
  this.discountMonths = discountMonths;

  var package = document.getElementsByClassName('package_box');
  console.log(package);

  package.forEach(function(item){
    item.innerHTML += 'hello';
  })


//   console.log(package)
// package.innerHTML = 'hello world'
// `
// <div class="package_name">
//                 <p>${this.name}</p>
//                 <p><span>$${this.price}</span>/month</p>
//             </div>
//             <div class="package_desc">
//                 <ul>
//                     <li>${this.space}GB Storage</li>
//                     <li>${this.transfer}GB Bandwidth</li>
//                     <li>${this.domain} Domain</li>
//                     <li>${this.support} Support</li>
//                 </ul>
//             </div>
//             <div class="package_btn">
//                 <button>Get Started</button>
//             </div>
// `;
  
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

var p1 = new Plan("Basic", 5, 10, 100, 1, 'Email Support', [6, 7]);
var p2 = new Plan("Pro", 15, 50, 500, 5, 'Email + Phone Support' [6, 7, 11]);
var p3 = new Plan("Business", 'Ultimate', 'Ultimate', 'Ultimate', '24/7 Support', [6, 7]);


// var annualPrice = p1.calcAnnual(0.90);
// var annualPrice1 = p2.calcAnnual(0.85);
// // var annualPrice2 = p3.calcAnnual(0.70);

// console.log(annualPrice, annualPrice1,)


