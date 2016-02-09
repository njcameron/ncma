'use strict';

angular.module('njcameron.FlatoBs2',
    ['ngResource',
      'ngAnimate',
      'ngRoute',
      'ngSanitize',
      'smoothScroll',
      'mgcrea.ngStrap',
      'angular-parallax',
      'viewhead',
      'angularUtils.directives.dirDisqus'
    ])

  .constant('version', 'v0.1.0')

  .config(function($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');
    $locationProvider.html5Mode(false);

    $routeProvider
      .when("/", {
        templateUrl: "views/home.html",
        controller: "MainCtrl"
      })

      .when("/blog/post/:nid", {
        templateUrl: "views/blog-page.html",
        controller: "BlogPageCtrl"
      })

      .when("/blog/post/:nid", {
        templateUrl: "views/blog-page.html",
        controller: "BlogPageCtrl"
      })

      .otherwise({
        redirectTo: '/'
      });

  });
