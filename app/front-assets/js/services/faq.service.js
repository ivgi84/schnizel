define(['angular'], function(angular) {

    faqService.$inject = ['$http'];

    function faqService($http) {

        var faqSrc = 'back-assets/data/faq.json';

        var getFaqList = function faqList() {
            return $http.get(faqSrc).then(resolve, reject);

            function resolve(response) {
                return response.data;
            }

            function reject() {
                return 'request rejected';
            }
        };

        return {
            getFaqList: getFaqList
        };

    }

    return faqService;

});
