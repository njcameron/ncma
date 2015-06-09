'use strict';

angular.module('njcameron.FlatoBs2')

  .filter('time', function () {
    return function (obj) {
      return +new Date(obj);
    };
  })

  .filter('startFrom', function () {
    return function (obj, index) {
      return obj && obj.slice(index);
    };
  })

  /*
   * HTML to plain text filter.
   */
  .filter('htmlToPlaintext', function () {
    return function (text) {
      return String(text).replace(/<[^>]+>/gm, '');
    };
  })

  /*
   * HTML filter.
   */
  .filter('mysce', function ($sce) {
    return $sce.trustAsHtml;
  });