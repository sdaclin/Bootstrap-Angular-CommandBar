angular.module('commandBar', [])
    .directive('commandbar', ['$parse', function($parse) {
        'use strict';

        return {
            restrict: 'A',
            require: '?ngModel',
            scope: {
                data : '&',
                callback : '&',
                ngModel : '='
            },
            link: function postLink(scope, element, attr, controller) {
                //$(element).val(scope.ngModel);
                //controller.$setViewValue('testNew');
                $(element).typeahead({
                    source: function(query) {
                        return scope.data({
                            query:query
                        });
                    }
                    ,items: attr.items,
                    itemSelected: function(element, data, text) {
                        // Wire result text with ngModel
                        scope.$apply(function () {
                            scope.ngModel = text;
                        });
                        // Call callback function if set
                        if (scope.callback != null) {
                            scope.callback({dataSelected:data});
                        }
                    }
                });

            }
        };

    }]);

function CommandBarCtrl($scope) {
    $scope.commandbarData = function(query){
        console.log('commandbarData requested for query : '+query + '... but returning demo data set');

        var demoDataset = [
            { name: 'Paris'},
            { name: 'NY'},
            { name: 'Toronto', category : 'City' },
            { name: 'Montreal', category : 'City' },
            { name: 'New York', category : 'City' },
            { name: 'Buffalo', category : 'City' },
            { name: 'Boston', category : 'City' },
            { name: 'Columbus', category : 'City' },
            { name: 'Dallas', category : 'City' },
            { name: 'Vancouver', category : 'City' },
            { name: 'Seattle', category : 'City' },
            { name: 'Los Angeles', category : 'City' },
            { name: 'Great', category : '#Tag' },
            { name: 'Mega', category : '#Tag' },
            { name: 'Super', category : '#Tag' },
            { name: 'Over', category : '#Tag' }
        ];
        console.log(demoDataset);
        return demoDataset;
    };
    $scope.commandbarCallback = function(data) {
        console.log('commandbarCallback triggered with data : ');
        console.log(data);
    };
}
