var listingPrice = 1199;
var sellingPrice = 399;
var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;

console.log("Actual percent : "+discountPercent);

var displayDiscountPercentage = Math.round(discountPercent);

console.log("Discount : "+displayDiscountPercentage+"% off");

var result = listingPrice >= sellingPrice;

console.log(result);
console.log(typeof result);

console.log(typeof sellingPrice);
console.log(typeof displayDiscountPercentage);