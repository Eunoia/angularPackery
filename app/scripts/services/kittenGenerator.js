'use strict';

angular.module('angularPackeryApp')
	.service('Kittengenerator', function Kittengenerator($timeout,$http,$q) {
		return {
			generate: function(element){
				function randomCat(){
					var item = document.createElement("div");
					item.className = "item";
					var cat = document.createElement("img");
					var base = 100;
					var rand_x, rand_y;
					rand_x = (Math.round(Math.random()*6)+1)*base;
					rand_y = (Math.round(Math.random()*6)+1)*base;
					cat.src = "http://fillmurray.com/g/"+rand_x+"/"+rand_y;
					item.appendChild(cat);
					return item;
				}
				var deferred = $q.defer()
				var maxKittens = 50;
				$http.defaults.useXDomain = true;
				$http.defaults.headers.common['Authorization'] = 'Client-ID b2da2866dcbfa39';
				for(var i =0; i< maxKittens; i++){
					var kitteh = randomCat();
					element.append(kitteh);
				}
				$timeout(function(){
					imagesLoaded(document.querySelector('.kittens'),function(){
						var pcrky = new Packery(element[0],{itemSelector:".item",gutter: 0, columnWidth: 50});
						deferred.resolve()
					})
				},2);
				return deferred.promise
			}
		}
	});
