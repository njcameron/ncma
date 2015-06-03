'use strict';

var app = angular.module('njcameron.FlatoBs2')
  .constant('BASE_URL', "http://ferko.flato.local/")
  .constant('FILES_DIR', "sites/default/files/")
  .constant('BLOG_THUMB_PATH', "styles/blog_thumbnail/public/")
  .constant('CONFIG_PATH', "api/v1/config/")
  .constant('BLOG_PATH', "api/v1/content/blog/")
  .constant('WORK_PATH', "api/v1/content/work/")
  .constant('TAXONOMY_PATH', "api/v1/content/category/");

app.provider('config', function($provide) {

  var defaults = this.defaults = {
    debug: false,
    version: '0.1.0',
    locale: 'en_US',
    locales: [
      {
        id: 'en_US',
        name: 'English'
      },
      {
        id: 'fr_FR',
        name: 'French'
      }
    ]
  };
  var config = this.config = angular.copy(defaults);

  // var request = new XMLHttpRequest();
  // request.open('GET', 'config/config.json', false);
  // request.send(null);
  // if (request.status === 200) {
  //   angular.extend(config, JSON.parse(request.responseText));
  // }

  $provide.constant('$version', config.version);

  this.$get = function() {
    return config;
  };

});

/*
 * Reusable HTML filter.
 */
app.filter('mysce', function ($sce) {
  return $sce.trustAsHtml;
});

/*
 * API Service.
 */

// Blog posts API call.
app.factory('Blog', function($resource, BASE_URL, BLOG_PATH) {
  return $resource(BASE_URL + BLOG_PATH);
});

// Taxonomy term name API call.
app.factory('Terms', function($resource, BASE_URL, TAXONOMY_PATH) {
  return $resource(BASE_URL + TAXONOMY_PATH + '1');
});


/*
 * Process blog posts.
 */
app.service('BlogPostPreProcess', function(Terms, BASE_URL, FILES_DIR, BLOG_THUMB_PATH) {
  // Takes a value in seconds and returns miliseconds.
  this.processDate = function(seconds) {
    return seconds * 1000;
  };

  // Build thumbnail URL based on image style.
  this.processThumbnail = function(fileName) {
    return BASE_URL + FILES_DIR + BLOG_THUMB_PATH + fileName;
  };

  // Get the category name.
  this.processCategory = function(field_category) {

    if (field_category[0]) {
      var termId = field_category[0].target_id;
      var categoryObj = Terms.query({termId:termId}, function() {
        return categoryObj[0].name[0].value;
        //@todo why is this d8 and then blank???
      });
    }
  };


  this.processBlog = function(blogPost) {
    // Date.
    blogPost.created[0].date = this.processDate(blogPost.created[0].value);

    // Thumbnail images.
    blogPost.thumbnail = this.processThumbnail(blogPost.field_filename[0].value);

    // Get taxonomy terms name from API for a give
    blogPost.category = this.processCategory(blogPost.field_category);
    console.log(blogPost.category);
    return blogPost
  };
});