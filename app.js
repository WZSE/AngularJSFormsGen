var app = angular.module('jForm',[]);

app.controller("formController",['$scope','$http', function ($scope,$http) {
    $scope.s = {};
    $http.get('https://randomform.herokuapp.com/').then(function (response) {
        $scope.s.j = response.data.data;
    });

    $scope.submit = function(){
        var req = {
            method: 'POST',
            url: 'https://randomform.herokuapp.com/submit',
            headers: {
                'Content-Type': 'application/json'
            },
            //just the same form or value should be posted? Now just sending the same data
            data: $scope.s.j
        }
        $http(req).then(function(response){
            $scope.s.w = response.data;
            $http.get('https://randomform.herokuapp.com/').then(function (response) {
                $scope.s.j = response.data.data;
            });
        });
    }
}]);