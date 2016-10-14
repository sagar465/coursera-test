(function(){

  angular.module("NarrowItDownApp",[])
  .service("MenuSearchService",MenuSearchService);

MenuSearchService.$inject = ["$http"];
  function MenuSearchService($http){
    var service=this;

    service.getMatchedMenuItems = function(searchTerm){
      service.foundItems = [];
      $http(
              {
                  method:"GET",
                  url:"http://davids-restaurant.herokuapp.com/menu_items.json"
              }
            ).then(function(response){
                    for(var i=0;i<response.data.menu_items.length;i++){
                        if(response.data.menu_items[i].description.includes(searchTerm)=== true){
                          service.foundItems.push(response.data.menu_items[i]);
                        }
                      }
                  },function(response){

                  });
                  return service.foundItems;
    };

      service.removeItem = function(index){
        service.foundItems.splice(index,1);
        return service.foundItems;
      }
  };

})();
