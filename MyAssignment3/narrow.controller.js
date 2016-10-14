// (function(){
//
//   angular.module("NarrowItDownApp")
//   .controller("NarrowItDownController",NarrowItDownController)
//   .directive("foundItems",FoundItems);
//
//   function FoundItems(){
//     var ddo = {
//         templateUrl:"FoundList.html",
//         scope:{
//             found:"<",
//             onRemove:"&"
//         },
//         controller:FoundItemsController,
//         bindToController:true,
//         controllerAs:"list"
//
//       }
//       return ddo;
//   };
//
//   function FoundItemsController(){
//     var list = this;
//
//   };
//
// NarrowItDownController.$inject=["MenuSearchService"];
//   function NarrowItDownController(MenuSearchService){
//     var list = this;
//     list.searchContent = "";
//     list.foundItems;
//     list.narrowItDown = function(){
//                   list.foundItems = MenuSearchService.getMatchedMenuItems(list.searchContent);
//     };
//     list.removeItem = function(index){
//       list.foundItems.splice(index,1);
//     }
//   };
// })();


(function(){
angular.module("NarrowItDownApp")
.controller("NarrowItDownController",NarrowItDownController)
.directive("foundItems",FoundItems);

function FoundItems(){
  var ddo = {
      templateUrl:"ShoppingList.html",
      scope:{
          found:"<",
          onRemove:"&"
      },
      controller:FoundItemsDirectiveController,
      controllerAs:"list",
      bindToController:true
    }
    return ddo;
};

function FoundItemsDirectiveController(){
  var list = this;
};

NarrowItDownController.$inject = ["MenuSearchService"];
function NarrowItDownController(MenuSearchService){
  var list = this;
  list.searchContent = "";
  list.foundItems=new Array();
  list.narrowItDown = function(){
                          if(list.searchContent === ""){
                              list.empty = "Nothing Found!";
                          }else{
                                list.foundItems=MenuSearchService.getMatchedMenuItems(list.searchContent);
                          }
                          if(list.foundItems.length <1){
                            alert("hi");
                              list.empty = "Nothing Found!";
                          }
console.log(list.empty);
                        };

  list.removeItem = function(index){
                          list.foundItems=  MenuSearchService.removeItem(index);
                          };

};

// function ShoppingService(maxItems){
//     var service = this;
//     var items = [];
//     service.addItem = function(name,quantity){
//       if((maxItems===undefined) ||
//           (maxItems!==undefined) && (items.length<maxItems)){
//                   var item = {
//                     name : name,
//                     quantity: quantity
//                   };
//           items.push(item);
//         }else{
//           throw new Error("Max Items ("+maxItems+") reached.");
//         }
//     };
//
//     service.removeItem = function(itemIndex){
//       items.splice(itemIndex,1);
//     }
//
//     service.getItems = function(){
//               return items;
//     };
// }
//
// function ShoppingServiceFactory(){
//   var factory = function(maxItems){
//     return new ShoppingService(maxItems);
//   }
//
//   return factory;
// }

})();
