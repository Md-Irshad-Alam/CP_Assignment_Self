function Product(name,brand, price,description) {
  // Complete the constructor function
  this.name=name,
  this.brand =brand,
  this.price =price,
  this.description=description,
  this.sold = false;


}
var obj = new Product();
// console.log(obj)
Product.prototype.changePrice = function (newprice){
  this.price =newprice;
}
// obj.changePrice(10000000);
Product.prototype.toggleStatus = function(){
  this.sold =!this.sold;
}

// changePrice();
// co+nsole.log(
// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;

