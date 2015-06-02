'use strict';

var app = angular.module('njcameron.FlatoBs2');

/*
 * Directional hover plugin.
 */
app.directive('directionalHover', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      // Set hover direction.
      $(element).hoverdir({hoverDelay: 50, hoverElem: '.layer'});

      // Set blur on image.
      $(element).mouseenter(function() {
        var that = this;

        setTimeout(function(){
          var workImage = $(that).find('.work-component-image');
          workImage.addClass('blur');
        },250);

      });

      $(element).mouseleave(function() {
        var workImage = $(this).find('.work-component-image');
        workImage.removeClass('blur');
      });

    }
  };
});