"use strict";
exports.__esModule = true;
// Q1
var products_1 = require("./products");
// Q2
var productName = "fanny pack";
// Q7
var shipping;
var taxPercent;
var taxTotal;
var total;
// Q8
var shippingAddress = "575 Broadway, New York City, New York";
// Q3
var product = products_1["default"].filter(function (product) { return product.name === productName; })[0];
// find method not working for some reason
// Q4
console.log(product);
// Q5
if (product.preOrder === "true") {
    console.log("We will send you a message when your product is on its way.");
}
// Q9
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log("We provide free shipping for this product");
}
else {
    shipping = 5;
}
// Q10
if (shippingAddress.match(/New York/i)) {
    taxPercent = 0.1;
    // console.log("We in New York");
}
else {
    taxPercent = 0.05;
    // console.log("We are elsewhere");
}
// Q11
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
// Q12
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
