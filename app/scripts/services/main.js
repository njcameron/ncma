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

  $provide.constant('$version', config.version);

  this.$get = function() {
    return config;
  };

});


/*
 * API Service.
 */
// Strings API call.
app.factory('Strings', function($resource, BASE_URL, CONFIG_PATH) {
  return $resource(BASE_URL + CONFIG_PATH);
});

// Work items API call.
app.factory('Work', function($resource, BASE_URL, WORK_PATH) {
  return $resource(BASE_URL + WORK_PATH);
});

// Blog posts API call.
app.factory('Blog', function($resource, BASE_URL, BLOG_PATH) {
  return $resource(BASE_URL + BLOG_PATH);
});

// Blog page API call.
app.factory('BlogPage', function($resource, BASE_URL, BLOG_PATH) {
  return $resource(BASE_URL + BLOG_PATH + ':nodeId');
});

// Taxonomy term name API call.
app.factory('Terms', function($resource, BASE_URL, TAXONOMY_PATH) {
  return $resource(BASE_URL + TAXONOMY_PATH + ':termId');
});

/*
 * Process work items.
 */
app.service('WorkPreProcess', function(Terms, BASE_URL, FILES_DIR) {
  this.processWork = function(workItem) {
    // Full images.
    workItem.fullImage = BASE_URL + FILES_DIR + workItem.field_filename[0].value;

    return workItem
  };
});

/*
 * Process blog posts.
 */
app.service('BlogPostPreProcess', function(Terms, BASE_URL, FILES_DIR, BLOG_THUMB_PATH) {
  this.processBlog = function(blogPost) {
    // Date.
    blogPost.date = blogPost.created[0].value * 1000;

    // Thumbnail images.
    blogPost.thumbnail = BASE_URL + FILES_DIR + BLOG_THUMB_PATH + blogPost.field_filename[0].value;

    // Full images.
    blogPost.fullImage = BASE_URL + FILES_DIR + blogPost.field_filename[0].value;

    // Category.
    if(Object.size(blogPost.field_category) > 0) {
      Terms.query({termId:blogPost.field_category[0].target_id}, function(data) {
        blogPost.category = data[0].name[0].value;
      });
    }

    return blogPost
  };
});

/*
 * Helper function to check number of array keys.
 */
Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};