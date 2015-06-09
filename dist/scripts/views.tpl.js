(function(window, document, undefined) {
  'use strict';
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/blog-page.html', '<meta view-head property="description" content="{{blog.field_standfirst[0].value | htmlToPlaintext}}"><meta view-head name="twitter:card" content="summary"><meta view-head name="twitter:site" content="@ncameron"><meta view-head name="twitter:title" content="{{blog.title[0].value}}"><meta view-head name="twitter:description" content="{{blog.field_standfirst[0].value | htmlToPlaintext}}"><meta view-head name="twitter:image" content="{{blog.thumbnail}}"><meta view-head property="og:title" content="{{blog.title[0].value}}"><meta view-head property="og:site_name" content="Neilcameron.me"><meta view-head property="og:url" content="http://neilcameron.me/#/blog/post/{{blog.nid[0].value}}"><meta view-head property="og:description" content="{{blog.field_standfirst[0].value | htmlToPlaintext}}"><meta view-head property="og:type" content="article"><meta view-head property="og:locale" content="en_UK"><meta view-head property="article:author" content="https://www.facebook.com/njcameron"><meta view-head property="article:publisher" content="https://www.facebook.com/njcameron"><div class="container-fluid"><div class="row"><div class="blog-post-image" parallax-background parallax-ratio="0.4" style="background-image: url({{blog.fullImage}})"></div></div></div><div class="container"><div class="row"><div class="col-md-9 blog-post-container"><h1 class="" view-title>{{blog.title[0].value}}</h1><h5 class="blog-post-date">{{blog.date | date:\'d MMM yyyy\'}} // {{blog.category}}</h5><div class="undertitle" ng-bind-html="blog.field_standfirst[0].value | mysce"></div><div class="blog-post-body" ng-bind-html="blog.body[0].value | mysce"></div></div></div></div><div class="go-back"><a class="small button border" href="/#/">Go back</a></div><div class="row"><footer ng-controller="MainCtrl">{{start.footer.footer_text}}</footer></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/home.html', '<meta name="description" content="Neil Cameron is a freelance drupal consultant and tech lead\n' + '    focused on building great developer teams and products."><view-title>Neil Cameron - Drupal | London | Consultant | Contractor</view-title><div class="container-fluid"><section ng-include="\'views/partials/header.html\'"></section><section ng-include="&quot;views/partials/banner.html&quot;" id="banner" class="video-background"></section><section ng-include="&quot;views/partials/about.html&quot;" id="about"></section><section ng-include="&quot;views/partials/work.html&quot;" ng-controller="WorkCtrl" id="work"></section><section ng-include="&quot;views/partials/blog.html&quot;" ng-controller="BlogCtrl" id="blog"></section><section ng-include="&quot;views/partials/footer.html&quot;" id="contact"></section></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/about.html', '<div class="row"><div class="fbs-divider"><div class="container"><div class="row"><div class="col-md-8 col-md-offset-2"><h1>{{start.about.about_title}}</h1><div class="undertitle">{{start.about.about_blurb}}</div></div></div></div></div><div class="container"><div class="row"><div class="col-md-6"><img src="/assets/images/me_sq.jpg" class="about-me-img"><div ng-bind-html="start.about.about_col_1.value | mysce"></div></div><div class="col-md-6"><div ng-include="&quot;views/partials/skillbar.html&quot;"></div><div ng-bind-html="start.about.about_col_2.value | mysce"></div></div></div></div></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/banner.html', '<div class="banner-wrapper"><div class="big-text">{{start.landing.land_title}}</div><div class="small-text">{{start.landing.catch_line}}</div><div class="button-wrapper"><a class="button border" href="" scroll-to="about">About</a> <a class="button border" href="" scroll-to="work">Work</a> <a class="button border" href="" scroll-to="blog">Blog</a></div></div><div class="video-overlay"></div><video loop muted autoplay="autoplay"><source src="assets/video/2-2.mp4" type="video/mp4"></source></video>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/blog.html', '<div class="row"><div class="fbs-divider"><div class="container"><div class="row"><div class="col-md-12"><h1>{{start.blog.blog_title}}</h1><div class="undertitle">{{start.blog.blog_blurb}}</div></div></div></div></div></div><div class="container"><div class="row"><div class="col-md-3 col-sm-4 col-xs-12 blog-teaser" ng-repeat="blog in blogs|limitTo:8" ng-include="&quot;views/partials/components/blog-component.html&quot;"></div></div></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/footer.html', '<div class="row"><div class="fbs-divider"><div class="container"><div class="row"><div class="col-md-8 col-md-offset-2"><h1>{{start.contact.contact_title}}</h1><div class="undertitle">{{start.contact.contact_blurb}}</div><div class="social-icons"><a href="https://twitter.com/ncameron" target="_blank"><i class="fa fa-twitter"></i></a> <a href="https://uk.linkedin.com/in/neiljcameron" target="_blank"><i class="fa fa-linkedin"></i></a> <a href="https://github.com/njcameron" target="_blank"><i class="fa fa-github"></i></a> <a href="mailto:neil@neilcameron.me" target="_blank"><i class="fa fa-envelope"></i></a></div></div></div></div></div></div><div class="container"><div class="row"><div class="col-md-12"><h1>{{start.newsletter.newsletter_title}}</h1><div class="undertitle">{{start.newsletter.newsletter_blurb}}</div></div></div><div class="row"><div class="col-md-12"><div id="mc_embed_signup"><form action="//neilcameron.us9.list-manage.com/subscribe/post?u=862d37c61e1b355f6afad1513&amp;id=d4cbc555c8" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate><div id="mc_embed_signup_scroll"><div class="mc-field-group"><input type="email" value="" name="EMAIL" class="text required email" id="mce-EMAIL" placeholder="Your email"></div><div class="mc-field-group"><input type="text" value="" name="NAME" class="text required" id="mce-NAME" placeholder="Your name"></div><div id="mce-responses" class="clear"><div class="response" id="mce-error-response" style="display:none"></div><div class="response" id="mce-success-response" style="display:none"></div></div><div style="position: absolute; left: -5000px"><input type="text" name="b_862d37c61e1b355f6afad1513_d4cbc555c8" tabindex="-1" value=""></div><div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="submit button border"></div></div></form></div></div></div></div><div class="row"><footer>{{start.footer.footer_text}}</footer></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/header.html', '');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/skillbar.html', '<div class="skillbar-wrapper"><div class="skillbar clearfix" data-percent="95%" data-title="Drupal backend is where I have the most experience.\n' + '     I\'m comfortable with both architecture and development, all to best practices." data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #E26A6A"><span>Drupal (backend)</span></div><div class="skillbar-bar" style="background: #E26A6A"></div><div class="skill-bar-percent">95%</div></div><div class="skillbar clearfix" data-percent="85%" data-title="SAAS / LESS / CSS / Bootstrap / Jquery all plugged into the Drupal theme layer." data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #D2527F"><span>Drupal (frontend)</span></div><div class="skillbar-bar" style="background: #D2527F"></div><div class="skill-bar-percent">95%</div></div><div class="skillbar clearfix" data-percent="90%" data-title="I\'ve worked on Agile projects as both a developer and scrum master.\n' + '     I\'m familiar with the intricacies of stakeholder management, developer engagement and\n' + '     team adoption of agile." data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #AEA8D3"><span>Agile delivery</span></div><div class="skillbar-bar" style="background: #AEA8D3"></div><div class="skill-bar-percent">90%</div></div><div class="skillbar clearfix" data-percent="80%" data-title="Building great teams is one the most challenging and rewarding things I\'ve done.\n' + '     I handle all aspects of team leadership: hiring, on-boarding, mentoring and performance management." data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #1BA39C"><span>Team building</span></div><div class="skillbar-bar" style="background: #1BA39C"></div><div class="skill-bar-percent">80%</div></div><div class="skillbar clearfix" data-percent="80%" data-title="Technical product management involves talking with end users,\n' + '     breaking ambiguous requirements down into user stories and figuring out\n' + '     how to best implement them within the technological constraints." data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #87D37C"><span>Product</span></div><div class="skillbar-bar" style="background: #87D37C"></div><div class="skill-bar-percent">80%</div></div><div class="skillbar clearfix" data-percent="65%" data-title="A small part of large projects require sophisticated engineering to provide\n' + '     bespoke functionality. Whilst I\'m comfortable writing clean OO code to create\n' + '     custom functionality, I would not class myself as software engineer." data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #F5D76E"><span>Engineering</span></div><div class="skillbar-bar" style="background: #F5D76E"></div><div class="skill-bar-percent">65%</div></div><div class="skillbar clearfix" data-percent="65%" data-title="I love tinkering with new technologies, including Angular which is\n' + '     emerging as a natural partner for decoupled Drupal 8. Angular was used to\n' + '     build this site and is something I look forward to using more in the future" data-placement="left" bs-tooltip><div class="skillbar-title" style="background: #FDE3A7"><span>Angular</span></div><div class="skillbar-bar" style="background: #FDE3A7"></div><div class="skill-bar-percent">65%</div></div></div><script>var aboutWaypoint = new Waypoint({\n' + '    element: document.getElementById(\'about\'),\n' + '    handler: function(direction) {\n' + '      jQuery(\'.skillbar\').each(function(){\n' + '        jQuery(this).find(\'.skillbar-bar\').animate({\n' + '          width:jQuery(this).attr(\'data-percent\')\n' + '        },1000);\n' + '      });\n' + '    }\n' + '  })</script>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/work.html', '<div class="row"><div class="fbs-divider"><div class="container"><div class="row"><div class="col-md-8 col-md-offset-2"><h1>{{start.work.work_title}}</h1><div class="undertitle">{{start.work.work_blurb}}</div></div></div></div></div></div><div class="row" id="work-components"><div class="col-md-4 col-sm-6 col-xs-12 work-component" ng-repeat="work in works|limitTo:6" ng-include="&quot;views/partials/components/work-component.html&quot;" directional-hover></div></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/components/blog-component.html', '<div class="thumbnail" blog-hover-thumb><div class="blog-thumbnail-wrapper"><a href="#/blog/post/{{blog.nid[0].value}}" class="button bold-subtitle">Read</a><div class="trans-layer"></div><img src="{{blog.thumbnail}}" alt=""></div><div class="caption"><h3>{{blog.title[0].value}}</h3><h6 class="term-{{blog.category}}">{{blog.category}}</h6><div class="teaser-text" ng-bind-html="blog.field_teaser[0].value | mysce"></div></div></div>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/components/work-component.html', ' <a href="" data-template="views/partials/components/work-modal.html" bs-modal><img class="work-component-image" src="{{work.fullImage}}" alt=""><div class="layer"><h2>{{work.field_project_name[0].value}}</h2><span class="undertitle">{{work.field_project_sub_title[0].value}}</span></div></a>');
  } ]);
  angular.module('njcameron.FlatoBs2').run([ '$templateCache', function($templateCache) {
    $templateCache.put('views/partials/components/work-modal.html', '<div class="modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog"><div class="modal-content"><i id="close-work-modal" class="fa fa-times" ng-click="$hide()"></i><div class="modal-body"><div class="row"><div class="col-md-12"><h2>{{work.field_project_title[0].value}}</h2><div class="undertitle">{{work.field_client[0].value}}</div></div></div><div class="row"><div class="col-md-6"><div ng-bind-html="work.field_work_col_1[0].value | mysce"></div><a class="button" role="button" ng-show="{{work.field_project_link[0].value != \'\'}}" href="{{work.field_project_link[0].value}}" target="_blank">View Project</a></div><div class="col-md-6"><div ng-bind-html="work.field_work_col_2[0].value | mysce"></div></div></div></div></div></div></div>');
  } ]);
})(window, document);