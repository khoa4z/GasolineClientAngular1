"use strict";

var app = angular.module('GasApp', ['ui.router', 'ngResource', 'ngMessages', 'ngLodash', 'ngRoute']);

app.config([ '$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode({       //ngRoute is required for this
        enabled : true,
        requireBase : false
    });
    $urlRouterProvider.otherwise('/');  //default
    $stateProvider
        .state('home',{
            url:'/',
            templateUrl: 'views/home.html',
            controller:'HomeCtrl'
        })
        .state('homeUrl',{
            url:'/home',
            controller: function($state){
                $state.go('home');
            }
        })
        .state('gasoline',{
            url:'/gasoline',
            templateUrl: 'views/gasoline.html',
            controller: 'CarCtrl'
        })
            // .state('gasoline.car',{
            //     url:'/car',
            //     templateUrl: 'views/car.html',
            //     controller:'CarCtrl'
            // })
            // .state('gasoline.gas',{
            //     url:'/gas',
            //     templateUrl: 'views/gas.html',
            //     controller:'GasCtrl'
            // })
}]);


app.controller('HomeCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
    //$state.go('gasoline');
    $scope.countingNumber = 455;
}]);

app.controller('CarCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state){
    console.log("car CTLR");
    $scope.cars = [];
    $scope.submit = function(_n){
        $scope.cars.push(_n);
        $scope.car.name = "";
    }
    $scope.countingNumber = 4;
    $scope.na.counting = 123;
    $scope.name = "NAME NAME";
}]);

app.directive('aDirective', function() {
    return {
        restrict:'EA',//sport. To the Game
        replace:true,
        //require:'^datasource',
        scope:{          //isolate scope,
            //datasource: '=',
            number:'@'
        },
        templateUrl:'views/templateDirective.html',
        // controller: ['$scope', function($scope) {
        //     $scope.dir1 =  15;
        // }],
        // link: function(scope, iElement, iAttrs, ctrl) {
        //     console.log(iAttrs.ngModel);    
        // }
    };
});

app.component('aComponent', {
    templateUrl:'views/templateCompo.html',    
    controller: function () {
        
    },
    bindings: {
        count: '='
    },
});

app.directive('myIsolatedScopeWithName', function () {
    return {
        scope: {
            name: '@'
        },
        template: 'Name: {{ name }} <input class="form-control" ng-model="name"/>'
    };
});