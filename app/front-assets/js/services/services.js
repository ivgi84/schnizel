define(['angular','./base.service','./subscribe.service','./affiliates.service'], function(angular, baseService, subscribeSvc, affiliatesSvc){
  'use strict';
  var module = angular.module('schnizelApp.services',[]);

  module.service('baseService', baseService);

  module.service('subscribeSvc', subscribeSvc);

  module.service('affiliatesSvc', affiliatesSvc);


});
