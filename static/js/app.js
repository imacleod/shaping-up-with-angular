(function(){
	var app = angular.module('gemStore', []);
	var gems = [
		{
			canPurchase: true,
			description: 'Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.',
			name: 'Dodecahedron',
			price: 2,
			reviews: [
				{stars: 5,
				 body: "I love this!",
				 author: "someone@somemail.com"
				}
			]
		},
		{
			canPurchase: false,
			description: 'Quite the gem, this one!',
			name: 'Pentagonal Gem',
			price: 5.95,
			reviews: [
				{stars: 3,
				 body: "Pretty good.",
				 author: "another@anothermail.com"
				}
			]
		}
	];

	app.controller('ReviewController', function(){
		this.addReview = function(product){
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review = {};
		};
		this.review = {};
	});

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('TabsController', function(){
		this.isSelectedTab = function(checkTab){
			return this.tab === checkTab;
		};
		this.selectTab = function(setTab) {
			this.tab = setTab;
		};
		this.tab = 1;
	});
})();