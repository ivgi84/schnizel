define(['angular', './components/components'], function() {

    angular
        .module('schnizelApp.components')
        .component('branchesPage', {
            templateUrl: 'front-assets/js/components/branchesPage/branchesPageCmp.view.html',
            controller: BranchesPageCtrl
        });

    BranchesPageCtrl.$inject = [];

    function BranchesPageCtrl() {
    
    }

    BranchesPageCtrl.prototype = {

    };

});
