(function(){

  angular
  .module('schnizelApp')
  .component('contactPage',{
    templateUrl:'assets/components/contactPage/contactPageCmp.view.html',
    controller:ContactPageCtrl
  });

  function ContactPageCtrl(){
    console.log(2222);
  }

})(window.angular);
