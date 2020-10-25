//Cost of a product and sell value. Caculate profit for 1000 products, with 
// 20% taxes, error for input < 0 and 20% of taxes at cost of product

let cost = 1;
let sell = 2;
let taxe = 1.2;
let prod = 1000;

// profit=((sell*prod)-(cost*prod*taxe))

let profit = ((sell*prod)-(cost*prod*taxe));

console.log("The profit by the selling of 1000 products for 2 each, at cost of 1 plus 20% taxes are:")

console.log(profit);
