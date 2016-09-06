(function(){
	var app = angular.module('store', []);
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
	}

	app.controller('StoreController', function(){
		this.product = gem;
	});
})();