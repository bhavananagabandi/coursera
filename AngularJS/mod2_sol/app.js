(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;
	toBuy.buyList = ShoppingListCheckOffService.buyList;
	toBuy.boughtFunction = function (itemIndex) {
		ShoppingListCheckOffService.boughtFunction(itemIndex);
	};
	

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;
	bought.boughtList = ShoppingListCheckOffService.boughtList;
}

function ShoppingListCheckOffService() {
	
	var service = this;
	
	service.buyList=[
	{
		name: 'cookies',
		quantity: 25
	},
	{
		name: 'coke',
		quantity: '5 bottles'
	},
	{
		name: 'chocolates',
		quantity: 3
	},
	{
		name: 'bread',
		quantity: '2 packets'
	},
	{
		name: 'milk',
		quantity: '1 gallon'
	}];

	service.boughtList = [];

	service.boughtFunction = function (itemIndex){
		var listItem = {};
		listItem = service.buyList[itemIndex];
		service.buyList.splice(itemIndex, 1);
		service.boughtList.push(listItem);
	}
}

})();