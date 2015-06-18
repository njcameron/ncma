'use strict';

var app = angular.module('njcameron.FlatoBs2');
/**
 * Controller for Strings.
 */
app.controller('MainCtrl', function ($scope, Strings) {
  Strings.get(function (data) {
    $scope.start = data;
  });
});

/**
 * Controller for work listings.
 */
app.controller("WorkCtrl", function ($scope, Work, WorkPreProcess) {
  Work.query(function (data) {
    $scope.works = data;
    angular.forEach($scope.works, function (value, index) {
      $scope.works[index] = WorkPreProcess.processWork(value);
    });
  });
});

/**
 * Controller for blog listings.
 */
app.controller("BlogCtrl", function ($scope, Blog, BlogPostPreProcess) {
  Blog.query(function (data) {
    $scope.blogs = data;
    angular.forEach($scope.blogs, function (value, index) {
      $scope.blogs[index] = BlogPostPreProcess.processBlog(value);
      console.log($scope.blogs[index]);

    });
  });
});

/**
 * Controller for blog page.
 */
app.controller("BlogPageCtrl", function ($scope, BlogPage, BlogPostPreProcess, $routeParams) {
  BlogPage.query({nodeId: $routeParams.nid}, function (data) {
    $scope.blog = BlogPostPreProcess.processBlog(data[0]);
  });
});