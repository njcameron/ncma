(function(window, document, undefined) {
  'use strict';
  angular.module('njcameron.FlatoBs2', [ 'ngResource', 'ngAnimate', 'ngRoute', 'ngSanitize', 'smoothScroll', 'mgcrea.ngStrap', 'angular-parallax', 'viewhead', 'angularUtils.directives.dirDisqus' ]).constant('version', 'v0.1.0').config([ '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('!');
    $routeProvider.when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainCtrl'
    }).when('/blog/post/:nid', {
      templateUrl: 'views/blog-page.html',
      controller: 'BlogPageCtrl'
    }).when('/blog/post/:nid', {
      templateUrl: 'views/blog-page.html',
      controller: 'BlogPageCtrl'
    }).otherwise({
      redirectTo: '/'
    });
  } ]);
  window.onload = function() {
    $('#preload_wrapper').animate({
      opacity: 0
    }, 300, function() {
      $('#preload_wrapper').remove();
    });
  };
  var app = angular.module('njcameron.FlatoBs2');
  app.controller('MainCtrl', [ '$scope', 'Strings', function($scope, Strings) {
    Strings.get(function(data) {
      $scope.start = data;
    });
  } ]);
  app.controller('WorkCtrl', [ '$scope', 'Work', 'WorkPreProcess', function($scope, Work, WorkPreProcess) {
    Work.query(function(data) {
      $scope.works = data;
      angular.forEach($scope.works, function(value, index) {
        $scope.works[index] = WorkPreProcess.processWork(value);
      });
    });
  } ]);
  app.controller('BlogCtrl', [ '$scope', 'Blog', 'BlogPostPreProcess', function($scope, Blog, BlogPostPreProcess) {
    Blog.query(function(data) {
      $scope.blogs = data;
      angular.forEach($scope.blogs, function(value, index) {
        $scope.blogs[index] = BlogPostPreProcess.processBlog(value);
      });
    });
  } ]);
  app.controller('BlogPageCtrl', [ '$templateCache', '$scope', 'BlogPage', 'BlogPostPreProcess', '$routeParams', function($templateCache, $scope, BlogPage, BlogPostPreProcess, $routeParams) {
    BlogPage.query({
      nodeId: $routeParams.nid
    }, function(data) {
      $scope.blog = BlogPostPreProcess.processBlog(data[0]);
      $scope.contentLoaded = true;
    });
  } ]);
  var app = angular.module('njcameron.FlatoBs2');
  app.directive('directionalHover', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).hoverdir({
          hoverDelay: 50,
          hoverElem: '.layer'
        });
        $(element).mouseenter(function() {
          var that = this;
          setTimeout(function() {
            $(that).find('.work-component-image').addClass('blur');
          }, 250);
        });
        $(element).mouseleave(function() {
          var workImage = $(this).find('.work-component-image');
          workImage.removeClass('blur');
        });
        $(element).click(function() {
          var workImage = $(this).find('.work-component-image');
          workImage.removeClass('blur');
          $(this).find('.layer').hide();
        });
      }
    };
  });
  app.directive('blogHoverThumb', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).mouseenter(function() {
          $(this).find('img').addClass('blur');
          $(this).find('a.button').show();
          $(this).find('.trans-layer').show();
        });
        $(element).mouseleave(function() {
          var blogTeaser = $(this).find('img');
          blogTeaser.removeClass('blur');
          $(this).find('a.button').hide();
          $(this).find('.trans-layer').hide();
        });
        $(element).click(function() {
          var blogTeaser = $(this).find('img');
          blogTeaser.removeClass('blur');
          $(this).find('a.button').hide();
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
  }).filter('htmlToPlaintext', function() {
    return function(text) {
      return String(text).replace(/<[^>]+>/gm, '');
    };
  }).filter('mysce', [ '$sce', function($sce) {
    return $sce.trustAsHtml;
  } ]);
  var app = angular.module('njcameron.FlatoBs2').constant('BASE_URL', 'https://d129n14rpxc864.cloudfront.net/').constant('FILES_DIR', 'sites/default/files/').constant('BLOG_THUMB_PATH', 'styles/blog_thumbnail/public/').constant('CONFIG_PATH', 'api/v1/config/').constant('BLOG_PATH', 'api/v1/content/blog/').constant('WORK_PATH', 'api/v1/content/work/').constant('TAXONOMY_PATH', 'api/v1/content/category/').constant('FORMAT_ARG', '?_format=json');
  app.provider('config', [ '$provide', function($provide) {
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
  app.factory('Strings', [ '$resource', 'BASE_URL', 'CONFIG_PATH', 'FORMAT_ARG', function($resource, BASE_URL, CONFIG_PATH, FORMAT_ARG) {
    return $resource(BASE_URL + CONFIG_PATH + FORMAT_ARG);
  } ]);
  app.factory('Work', [ '$resource', 'BASE_URL', 'WORK_PATH', 'FORMAT_ARG', function($resource, BASE_URL, WORK_PATH, FORMAT_ARG) {
    return $resource(BASE_URL + WORK_PATH + FORMAT_ARG);
  } ]);
  app.factory('Blog', [ '$resource', 'BASE_URL', 'BLOG_PATH', 'FORMAT_ARG', function($resource, BASE_URL, BLOG_PATH, FORMAT_ARG) {
    return $resource(BASE_URL + BLOG_PATH + FORMAT_ARG);
  } ]);
  app.factory('BlogPage', [ '$resource', 'BASE_URL', 'BLOG_PATH', 'FORMAT_ARG', function($resource, BASE_URL, BLOG_PATH, FORMAT_ARG) {
    return $resource(BASE_URL + BLOG_PATH + ':nodeId' + FORMAT_ARG);
  } ]);
  app.factory('Terms', [ '$resource', 'BASE_URL', 'TAXONOMY_PATH', 'FORMAT_ARG', function($resource, BASE_URL, TAXONOMY_PATH, FORMAT_ARG) {
    return $resource(BASE_URL + TAXONOMY_PATH + ':termId' + FORMAT_ARG);
  } ]);
  app.service('WorkPreProcess', [ 'Terms', 'BASE_URL', 'FILES_DIR', function(Terms, BASE_URL, FILES_DIR) {
    this.processWork = function(workItem) {
      workItem.fullImage = BASE_URL + FILES_DIR + workItem.field_filename[0].value;
      return workItem;
    };
  } ]);
  app.service('BlogPostPreProcess', [ 'Terms', 'BASE_URL', 'FILES_DIR', 'BLOG_THUMB_PATH', function(Terms, BASE_URL, FILES_DIR, BLOG_THUMB_PATH) {
    this.processBlog = function(blogPost) {
      blogPost.date = blogPost.created[0].value * 1e3;
      blogPost.thumbnail = BASE_URL + FILES_DIR + BLOG_THUMB_PATH + blogPost.field_filename[0].value;
      blogPost.fullImage = BASE_URL + FILES_DIR + blogPost.field_filename[0].value;
      if (Object.size(blogPost.field_category) > 0) {
        Terms.query({
          termId: blogPost.field_category[0].target_id
        }, function(data) {
          blogPost.category = data[0].name[0].value;
        });
      }
      return blogPost;
    };
  } ]);
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) {
        size = size + 1;
      }
    }
    return size;
  };
})(window, document);