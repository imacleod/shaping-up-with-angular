(function(){
	var app = angular.module('gemStore', []);
	var gems = [
		{
			canPurchase: true,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			name: 'Dodecahedron',
			price: 2
		},
		{
			canPurchase: false,
			description: 'Quite the gem, this one!',
			name: 'Pentagonal Gem',
			price: 5.95
		}
	];

	app.controller('StoreController', function(){
		this.products = gems;
	});
})();