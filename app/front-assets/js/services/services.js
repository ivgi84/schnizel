define(['angular','./faq.service','./subscribe.service','./affiliates.service'], function(angular, faqService, subscribeSvc, affiliatesSvc){
  'use strict';
  var module = angular.module('schnizelApp.services',[]);

  module.service('faqService', faqService);

  module.service('subscribeSvc', subscribeSvc);

  module.service('affiliatesSvc', affiliatesSvc);


});
