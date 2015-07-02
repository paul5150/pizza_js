function Pizza(cost){
  this.cost = 10;
}


Pizza.prototype.size = function(size) {
  if(size === "large") {
    this.cost += 2;
  } else if(size === "medium") {
    this.cost += 1;
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

Pizza.prototype.quantity = function(amount) {
  this.cost *= amount;
};


$(document).ready(function(){
  var newPizza = new Pizza();
  newPizza.cost = 0;

  $("form#order").submit(function(event){

    newPizza.cost = 10;
    var inputtedQuantity = parseInt($("input#quantity").val());
    var inputtedSize = $("select#size").val();
    var inputtedToppings = $("select#toppings").val();

    // newPizza.quantity(inputtedQuantity)
    // newPizza.size(inputtedSize)
    // newPizza.toppings(inputtedToppings)

    (newPizza.cost + newPizza.size(inputtedSize) + newPizza.toppings(inputtedToppings)) * newPizza.quantity(inputtedQuantity)

    $(".ordertotal").text(newPizza.cost);

    event.preventDefault();

    $("input#quantity").val("");
  });
});
