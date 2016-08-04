define(['angular'], function(angular){
  'use strict';

  angular
    .module('schnizelApp.services')
    .service('affiliatesSvc', affiliatesSvc);

    function affiliatesSvc(){

      var model = {
        affiliates : {
            'תל אביב': [ { address:' בלה בלה'}, { address:' 2בלה בלה1'}, { address:' 3בלה בלה1'} ],
            'רמת גן': [ { address:'שדג דגכ'},{address:'שדגכד2'}],
            'בני ברק': [ { address:'שדגכ'},{ address:'׳קרדג'}]
        }
      };

      var getAffilates= function(){
          return model.affiliates;
      };

      var service = {
        getAffilates: getAffilates
      };

      return service;

    }

});
