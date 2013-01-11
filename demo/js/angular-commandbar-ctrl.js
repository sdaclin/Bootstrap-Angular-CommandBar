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