function Pizza(cost){
  this.cost = 10;
}

Pizza.prototype.quantity = function(amount) {
  this.cost *= amount;
};

Pizza.prototype.size = function(size) {
  if(size === "large") {
    this.cost += 4;
  } else if(size === "medium") {
    this.cost += 2;
  } else if(size === "small"){
    this.cost;
  }
}

Pizza.prototype.toppings = function(toppings) {
  if(toppings === "Meat") {
    this.cost += 4;
  } else if(toppings === "Vegan"){
    this.cost += 2;
  } else if(toppings === "Veggie"){
    this.cost += 1;
  } else if(toppings === "Cheese") {
    this.cost += 0;
  }
}
