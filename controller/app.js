var app = angular.module("myse", []);

app.controller('SearchCtrl', function($scope, $http) {
    $scope.items = [];
    $scope.msg = null;
    $scope.search = function() {
        $http({
            method: "get",
            url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyD2n0m63W74jFZ0G6y_2JGBoRCB_xybEjw&cx=007033663672119120811:xyzdby8zhpa&q="+$scope.q
        }).then(function(resp){
            console.log(resp.data);
            $scope.items = resp.data.items;
            if($scope.items.length == 0) {
                $scope.msg = "not found";
            } else {
                $scope.msg = null;
            }
        }, function(err) {
            console.error(err);
        });
    }
});