
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);
    balanceManager.decreaseBalance(product.price);
    return product;
  },
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    balanceManager.increaseBalance(value);
  },
  isValidAmount: function(amount){
      if(amount === null){
      return false;
      } else {
      return true;
      }
  },
  releaseChange: function(){
      var currentBalance = balanceManager.getBalance();
      balanceManager.decreaseBalance(currentBalance);
      return this.convertToChange(currentBalance);
  },
  convertToChange: function(){
    return [ 'd', 'n', 'p', 'p', 'q' ];
  }

};
