Twitter Bootstrap AngularJS Commandbar directive
========================

* * *

master<br />
Sylvain Daclin [@sdaclin](https://twitter.com/#!/sdaclin)

An AngularJS Directive to manage github.com/tcrosen/ enhanced version of Twitter's Bootstrap Typeahead plugin.<br />
<http://twitter.github.com/bootstrap/javascript.html#typeahead>
<https://github.com/tcrosen/twitter-bootstrap-typeahead>

A propos
-----------------
Merci à [@mdo](https://twitter.com/#!/mdo) et [@fat](https://twitter.com/#!/fat) de [@twitter](https://twitter.com/) pour leur super travail sur Twitter Bootstrap.<br />
Merci à Terry Rosen [@rerrify](https://twitter.com/#!/rerrify) pour sa version améliorée de typeahead.<br />

J'avais besoin de plus de fonctionnalité donc j'ai créé une version supplémentaire afin de proposer les fonctionnalités suivantes :

- une directive AngularJs : **<input commandbar id="commandbarId" type="text" ng-model="commandbarValue" data="commandbarData(query)" callback="commandbarCallback(dataSelected)" placeholder="Type command ..." />**
- possibilité de spécifier une source de données provenant d'une méthode du controller Angular JS
- possibilité de spécifier une méthode de callback lorsque une commande est sélectionnée provenant du controller Angular JS
- possibilité de spécifier les commandes sous forme d'objet js qui sont alors retournés dans la méthode de callback

Requis
-----------------
* Twitter Bootstrap 2.0+
* AngularJS 1.0.3+
* jQuery 1.8.3+

Installation
-----------------
1) Download [Bootstrap](https://github.com/twitter/bootstrap) & [jQuery](http://docs.jquery.com/Downloading_jQuery) & [AngularJs](http://angularjs.org/)

2) Download this plugin.

- [ZIP](https://github.com/sdaclin/Bootstrap-Angular-CommandBar/archive/master.zip)
- [Clone in Windows](github-windows://openRepo/https://github.com/sdaclin/Bootstrap-Angular-CommandBar)
- `git clone git://github.com/sdaclin/Bootstrap-Angular-CommandBar.git`

3) Include files in your HTML. The minimum required for this plugin are:

    <!-- Bootstrap CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">

    <!-- Angular -->
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.0.3/angular.min.js"></script>

    <!-- jQuery-->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>

    <!-- bootstrap-commandbar -->
    <script src="js/bootstrap-commandbar.js" type="text/javascript"></script>
    <script src="js/bootstrap-commandbar-angular.js" type="text/javascript"></script>

4) ajouter la dépendance dans le module angular

```javascript
    angular.module('yourapp', ['commandBar']) [...]
```

5) ajouter une commandbar dans votre html

```html
    <input commandbar id="commandbarId" type="text" ng-model="commandbarValue" data="commandbarData(query)" callback="commandbarCallback(dataSelected)" placeholder="Type command ..." />
```

6) ajouter les handlers dans votre controller
```javascript
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
```
Un example se trouve dans le répertoire `/demo`

Change Log
-----------------