(function(window, document, undefined) {
  'use strict';
  angular.module('njcameron.FlatoBs2', [ 'ngAnimate', 'ngRoute', 'ngSanitize', 'smoothScroll' ]).constant('version', 'v0.1.0').config([ '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
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
  var app = angular.module('njcameron.FlatoBs2').constant('API_URL', 'http://ferko.flato.local/').constant('FILES_DIR', 'sites/default/files/').constant('CONFIG_PATH', 'api/v1/config/').constant('BLOG_PATH', 'api/v1/content/blog/').constant('WORK_PATH', 'api/v1/content/work/');
  app.controller('MainCtrl', [ '$location', 'version', '$http', '$scope', 'API_URL', 'CONFIG_PATH', function($location, version, $http, $scope, API_URL, CONFIG_PATH) {
    var vm = this;
    vm.path = $location.path.bind($location);
    vm.version = version;
    $http.get(API_URL + CONFIG_PATH).success(function(data) {
      $scope.start = data;
    }).error(function(data, status, headers, config) {});
  } ]);
  app.controller('WorkCtrl', [ '$scope', '$http', '$sce', 'API_URL', 'WORK_PATH', 'FILES_DIR', function($scope, $http, $sce, API_URL, WORK_PATH, FILES_DIR) {
    $http.get(API_URL + WORK_PATH).success(function(data) {
      $scope.works = data;
      angular.forEach($scope.works, function(value, index) {
        $scope.works[index].thumbnail = API_URL + FILES_DIR + $scope.works[index].field_filename[0].value;
      });
    }).error(function(data, status, headers, config) {});
  } ]);
  app.controller('BlogCtrl', [ '$scope', '$http', '$sce', 'API_URL', 'BLOG_PATH', 'FILES_DIR', function($scope, $http, $sce, API_URL, BLOG_PATH, FILES_DIR) {
    $http.get(API_URL + BLOG_PATH).success(function(data) {
      $scope.blogs = data;
      angular.forEach($scope.blogs, function(value, index) {
        var dateMs;
        dateMs = value.created[0].value * 1e3;
        $scope.blogs[index].created[0].date = dateMs;
        $scope.blogs[index].thumbnail = API_URL + FILES_DIR + $scope.blogs[index].field_filename[0].value;
      });
    }).error(function(data, status, headers, config) {});
  } ]);
  app.directive('tooltip', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).hover(function() {
          $(element).tooltip('show');
        }, function() {
          $(element).tooltip('hide');
        });
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
  app.filter('mysce', [ '$sce', function($sce) {
    return $sce.trustAsHtml;
  } ]);
})(window, document);