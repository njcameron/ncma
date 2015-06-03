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

      // Set blur on image on mouse over.
      $(element).mouseenter(function() {
        var that = this;
        setTimeout(function(){
          $(that).find('.work-component-image').addClass('blur');
        },250);

      });

      // On mouse leave remove blur.
      $(element).mouseleave(function() {
        var workImage = $(this).find('.work-component-image');
        workImage.removeClass('blur');
      });

      // On click remove blur and hover layer.
      $(element).click(function() {
        var workImage = $(this).find('.work-component-image');
        workImage.removeClass('blur');
        $(this).find('.layer').hide();
      });

    }
  };
});

/*
 * Blog hover plugin.
 */
app.directive('blogHoverThumb', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      // Set blur on image on mouse over.
      $(element).mouseenter(function() {
        $(this).find('img').addClass('blur');
        $(this).find('a.button').show();
        $(this).find('.trans-layer').show();
      });

      // On mouse leave remove blur.
      $(element).mouseleave(function() {
        var blogTeaser = $(this).find('img');
        blogTeaser.removeClass('blur');
        $(this).find('a.button').hide();
        $(this).find('.trans-layer').hide();


      });

      // On click remove blur and hover layer.
      $(element).click(function() {
        var blogTeaser = $(this).find('img');
        blogTeaser.removeClass('blur');
        $(this).find('a.button').hide();
      });

    }
  };
});