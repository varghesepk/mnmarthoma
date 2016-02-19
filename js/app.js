'use strict';

var app = angular.module('myApp', ['ngRoute', 'ui.bootstrap']);

// configure our routes
app.config(function($routeProvider) {
  $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'tmpl/home.html',
        controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'tmpl/about.html',
        controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'tmpl/contact.html',
        controller  : 'contactController'
    })

    .when('/vicar', {
        templateUrl : 'tmpl/vicar.html',
        controller  : 'vicarController'
    })

    .when('/bishop', {
        templateUrl : 'tmpl/bishop.html',
        controller  : 'bishopController'
    })

    .when('/believe', {
        templateUrl : 'tmpl/believe.html',
        controller  : 'believeController'
    })

    .when('/schedule', {
        templateUrl : 'tmpl/schedule.html',
        controller  : 'scheduleController'
    })

    .when('/committee', {
        templateUrl : 'tmpl/committee.html',
        controller  : 'committeeController'
    })

    .when('/events', {
        templateUrl : 'tmpl/events.html',
        controller  : 'eventsController'
    });
});

app.factory('dataFactory', function($http){
  var dataFactory = {};
  dataFactory.getData = function(){
    return $http.get('data/appData.json');
  };

  return dataFactory;
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope, dataFactory) {

  $scope.active = "home";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };

});

app.controller('aboutController', function($scope, dataFactory) {

  $scope.active = "about";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.about.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('contactController', function($scope, dataFactory) {

  $scope.active = "contact";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.contact.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('vicarController', function($scope, dataFactory) {

  $scope.active = "more";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.vicar.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('bishopController', function($scope, dataFactory) {

  $scope.active = "more";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.bishop.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('believeController', function($scope, dataFactory) {

  $scope.active = "more";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.believe.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('scheduleController', function($scope, dataFactory) {

  $scope.active = "more";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.schedule.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('committeeController', function($scope, dataFactory) {

  $scope.active = "more";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.committee.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});

app.controller('eventsController', function($scope, dataFactory) {

  $scope.active = "more";

  $scope.init = function(){
    $scope.getData();
  };

  $scope.getData = function(){
    dataFactory.getData()
    .then(function successCallback(response) {
      $scope.appData = response.data;
      $scope.slides = $scope.appData.home.slides;
      $scope.content = $scope.appData.events.content;
    },
    function errorCallback(response) {
      console.log("ERROR::", response);
    });
  };
});
