(function(window, document, undefined) {
  'use strict';
  angular.module('njcameron.FlatoBs2', [ 'ngAnimate', 'ngRoute', 'ngSanitize' ]).constant('version', 'v0.1.0').config([ '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $routeProvider.when('/', {
      templateUrl: 'views/home.html'
    }).when('/features', {
      templateUrl: 'views/features.html'
    }).when('/contact', {
      templateUrl: 'views/contact.html'
    }).otherwise({
      redirectTo: '/'
    });
  } ]);
  angular.module('njcameron.FlatoBs2').controller('MainCtrl', [ '$location', 'version', function($location, version) {
    var vm = this;
    vm.path = $location.path.bind($location);
    vm.version = version;
  } ]);
  angular.module('njcameron.FlatoBs2').directive('ngHelloWorld', function() {
    return {
      restrict: 'EAC',
      scope: true,
      compile: function compile(tElement, tAttrs) {
        tElement.html('<span>hello {{name}}</span>');
        return function postLink(scope, element, attrs, controller) {
          scope.name = 'world';
        };
      }
    };
  });
  angular.module('njcameron.FlatoBs2').filter('time', function() {
    return function(obj) {
      return +new Date(obj);
    };
  }).filter('startFrom', function() {
    return function(obj, index) {
      return obj && obj.slice(index);
    };
  });
  angular.module('njcameron.FlatoBs2').provider('config', [ '$provide', function($provide) {
    var defaults = this.defaults = {
      debug: false,
      version: '0.1.0',
      locale: 'en_US',
      locales: [ {
        id: 'en_US',
        name: 'English'
      }, {
        id: 'fr_FR',
        name: 'French'
      } ]
    };
    var config = this.config = angular.copy(defaults);
    $provide.constant('$version', config.version);
    this.$get = function() {
      return config;
    };
  } ]);
})(window, document);