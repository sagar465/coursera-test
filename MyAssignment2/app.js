(function(){

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyShoppingController",ToBuyShoppingController)
.controller("AlreadyBoughtShoppingController",AlreadyBoughtShoppingController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
function ToBuyShoppingController(ShoppingListCheckOffService){
  var buyList = this;
  buyList.toBuyitems = ShoppingListCheckOffService.getToBuyItems();
buyList.boughtCall = function(index){
                                ShoppingListCheckOffService.boughtCall(index);
                      }
buyList.buyMessage = "Everything is bought";
};

AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"]
function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
  boughtList.boughtMessage = "Nothing bought Yet";
};

function ShoppingListCheckOffService(){
    var service = this;
    service.toBuy = [
                      {name: "Maggi",quantity:"5"},
                      {name: "Pasta",quantity:"5"},
                      {name: "Pizza",quantity:"5"},
                      {name: "Donut",quantity:"5"},
                      {name: "Falooda",quantity:"5"}
                    ];
    service.alreadyBought = [];
    service.getToBuyItems = function(){
                      return service.toBuy;
    };
    service.getBoughtItems = function(){
                      return service.alreadyBought;
    }
    service.boughtCall = function(index){
              service.alreadyBought.push(service.toBuy[index]);
              service.toBuy.splice(index,1);
    };

};
})();
