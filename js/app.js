(function(){
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;

    });

    var gems = [
        {
            name: 'Pentagonal Gem',
            price: 2.95,
            description: '..',
            images: [
                {
                    full: 'images/pentagonal.gif'
                },
                {
                    full: 'images/pentagonal-01.gif'
                }
            ]
            
        },
        {
            name: 'Dodecahedron',
            price: 5.95,
            description: '..',
            images: [
                {
                    full: 'images/dodecahedron.gif'
                },
                {
                    full: 'images/dodecahedron-01.gif'
                }
            ]
        }
    ];

})();
