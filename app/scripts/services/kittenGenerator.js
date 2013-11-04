'use strict';

angular.module('angularPackeryApp')
	.service('Kittengenerator', function Kittengenerator($timeout,$http) {
		// AngularJS will instantiate a singleton by calling "new" on this function
		return {
			generate: function(element){
				function randomCat(){
					var item = document.createElement("div");
					item.className = "item";
					var cat = document.createElement("img");
					var base = 100;
					var rand_x, rand_y;
					rand_x = (Math.round(Math.random()*6)+0)*base;
					rand_y = (Math.round(Math.random()*6)+0)*base;
					cat.src = "http://placekitten.com/"+rand_x+"/"+rand_y;
					item.appendChild(cat);
					return item;
				}
				var maxKittens = 50;
				$http.defaults.useXDomain = true;
				$http.defaults.headers.common['Authorization'] = 'Client-ID b2da2866dcbfa39';
				// $http.defaults.headers.common['X-Testing'] = "portland rain";
				// var headers = {
				// 	headers:{
				// 		'Authorization':'Client-ID b2da2866dcbfa39'
				// 		// "X-Testing","portland"
				// 	}
				// }
				$http.get('https://api.imgur.com/3/gallery/hot/viral/0.json')
				.success(function(data){
					console.log(data);
				}).error(function(a,b,c,d,e){
					console.log("ERROR",a,b,c,d);
				});
				for(var i =0; i< maxKittens; i++){
					var kitteh = randomCat();
					element.append(kitteh); 
					// element.attr("infinite-scroll","myPagingFunction()")
					// element.attr("infinite-scroll-distance","3");
				}
				$timeout(function(){
					imagesLoaded(document.querySelector('.kittens'),function(){
						var pcrky = new Packery(element[0],{itemSelector:".item",gutter: 0, columnWidth: 50});
						return typeof pckry;
					})
				},2);
			}
		}
	});
