'use strict';

var app = angular.module('njcameron.FlatoBs2')
  .constant('API_URL', "http://ferko.flato.local/")
  .constant('FILES_DIR', "sites/default/files/")
  .constant('BLOG_THUMB_PATH', "styles/blog_thumbnail/public/")
  .constant('CONFIG_PATH', "api/v1/config/")
  .constant('BLOG_PATH', "api/v1/content/blog/")
  .constant('WORK_PATH', "api/v1/content/work/")
  .constant('TAXONOMY_PATH', "api/v1/content/category/");

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
app.controller("BlogCtrl", function ($scope, Blog, BlogPostPreProcess) {
  Blog.query(function(data) {
    $scope.blogs = data;
    angular.forEach($scope.blogs, function (value, index) {
      $scope.blogs[index] = BlogPostPreProcess.processBlog(value);
    });
  });
});


/**
 * Controller for blog page.
 */
app.controller("BlogPageCtrl", function ($scope, BlogPage, BlogPostPreProcess, $routeParams, $sce) {
  BlogPage.query({nodeId:$routeParams.nid}, function(data) {
    $scope.blog = BlogPostPreProcess.processBlog(data[0]);
    console.log();
  });
});