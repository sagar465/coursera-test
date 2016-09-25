(function(){
"use strict";

angular.module('MyAssignment1',[])
.controller('MyAssignment1Controller',MyController);
MyController.$inject = ['$scope'];
function MyController($scope){
      $scope.itemString = "";
      $scope.responseMsg= "";
      $scope.findNoofitems = function(){
        var items = new Array();
        items = $scope.itemString.split(",");
        // to filter empty items
        items = items.filter(removeEmptyStrings);
        if(items.length == 0){
          $scope.responseMsg = "Please enter data first";
        }
        else if(items.length <= 3){
            $scope.responseMsg = "Enjoy!";
        }
        else {
          $scope.responseMsg = "Too much!";
        }
      }
};

//filter function will not consider empty values present in an array
function removeEmptyStrings(items){
  return items;
}
})();
