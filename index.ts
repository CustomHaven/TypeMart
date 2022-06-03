// https://www.codecademy.com/courses/learn-typescript/projects/typemart
// Q1
import products from "./products";

// Q2
const productName : string = "fanny pack";
// Q7
let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number;
// Q8
const shippingAddress : string = "575 Broadway, New York City, New York";

// Q3
const product = products.filter(product => product.name === productName)[0];
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
} else {
  shipping = 5;
}


// Q10
if (shippingAddress.match(/New York/i)) {
  taxPercent = 0.1;
  // console.log("We in New York");
} else {
  taxPercent = 0.05;
  // console.log("We are elsewhere");
}

// Q11
taxTotal = Number(product.price) * taxPercent;

total = Number(product.price) + taxTotal + shipping;


// Q12
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);