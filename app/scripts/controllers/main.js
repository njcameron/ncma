'use strict';

var app = angular.module('njcameron.FlatoBs2')
  .constant('API_URL', "http://ferko.flato.local/")
  .constant('FILES_DIR', "sites/default/files/")
  .constant('CONFIG_PATH', "api/v1/config/")
  .constant('BLOG_PATH', "api/v1/content/blog/")
  .constant('WORK_PATH', "api/v1/content/work/");

app.controller('MainCtrl', function($location, version, $http, $scope, API_URL, CONFIG_PATH) {

  var vm = this;
  vm.path = $location.path.bind($location);
  vm.version = version;

  $http.get(API_URL + CONFIG_PATH).
    success(function (data) {
      $scope.start = data;
    }).
    error(function (data, status, headers, config) {
      // log error
    })

});


/**
 * Controller for work listings.
 */
app.controller("WorkCtrl", function ($scope, $http, $sce, API_URL, WORK_PATH, FILES_DIR) {
  $http.get(API_URL + WORK_PATH).
    success(function (data) {
      $scope.works = data;
      // Generate image. link.
      angular.forEach($scope.works, function (value, index) {
        // Image link.
        $scope.works[index].thumbnail = API_URL + FILES_DIR + $scope.works[index].field_filename[0].value;
      });

    }).
    error(function (data, status, headers, config) {
      // log error
    });
});


/**
 * Controller for blog listings.
 */
app.controller("BlogCtrl", function ($scope, $http, $sce, API_URL, BLOG_PATH, FILES_DIR) {
  $http.get(API_URL + BLOG_PATH).
    success(function (data) {
      $scope.blogs = data;
      // Convert seconds to milliseconds and generate image links.
      angular.forEach($scope.blogs, function (value, index) {
        var dateMs;
        // Date.
        dateMs = value.created[0].value * 1000;
        $scope.blogs[index].created[0].date = dateMs;
        // Images.
        $scope.blogs[index].thumbnail = API_URL + FILES_DIR + $scope.blogs[index].field_filename[0].value;
      });
    }).
    error(function (data, status, headers, config) {
      // log error
    });
});