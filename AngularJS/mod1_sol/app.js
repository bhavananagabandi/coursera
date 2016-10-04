(function () {
'use strict';
angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope){
      $scope.listItems = "";
   
    $scope.clickFunction = function() {       
        var itemNum = itemCount();        
        $scope.statusMsg = "";
        if(itemNum == 0){
            $scope.statusMsg = "Please enter data first";
        }else if(itemNum < 4){
            $scope.statusMsg = "Enjoy!";
        }else{
            $scope.statusMsg = "Too much!";
        }
        
    };
     function itemCount() {
        var count = 0;
        var items = $scope.listItems;
         if(items != ""){
        var itemsArray = items.split(",");
        count = itemsArray.length;
     }
       return count;
    };
    }
})();