var product = {
    name: "Product Name",
    price: 10.99,
    description: "Product description goes here.",
    isInBasket: false,
    addToBasket: function() {
      if (!this.isInBasket) {
        this.isInBasket = true;
        console.log(this.name + " has been added to the shopping basket.");
      } else {
        console.log(this.name + " is already in the shopping basket.");
      }
    },
    removeFromBasket: function() {
      if (this.isInBasket) {
        this.isInBasket = false;
        console.log(this.name + " has been removed from the shopping basket.");
      } else {
        console.log(this.name + " is not in the shopping basket.");
      }
    }
  };
  var myProduct = Object.create(product);
myProduct.name = "My Product";
myProduct.price = 9.99;

myProduct.addToBasket(); 
myProduct.removeFromBasket(); 
