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