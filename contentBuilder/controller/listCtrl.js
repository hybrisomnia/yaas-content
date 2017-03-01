var defaultListApp = angular.module('yaasContentApp', ['builder', 'builder_editors']);
defaultListApp.controller('itemListCtrl', ['$scope','Restangular', function($scope, Restangular){
    $scope.items = ['item1','item2','item3','item4'];
    Restangular.setBaseUrl('https://api.yaas.io/hybris/document/v1/contentmanager/contentmanager.documentclient/data');
    Restangular.one('items').getList().then(function(items){
        $scope.items = items;
    },function(error){
        //handle error
    });

}]);
