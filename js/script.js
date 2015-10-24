var app = angular.module('my-app', [], function () 
{
})

var monthDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var zoo1 = ["a",8,15,22,29];
var zoo2 = [2,9,16,23,30];
var zoo3 = [3,10,17,24,31];
var zoo4 = [4,11,18,25,0];
var zoo5 = [5,12,19,26,0];
var zoo6 = [6,13,20,27,0];

app.controller('MyCtrl', function($scope) 
{
    $scope.monthDays = monthDays;
	$scope.zoo1 = zoo1;
	$scope.zoo2 = zoo2;
	$scope.zoo3 = zoo3;
	$scope.zoo4 = zoo4;
	$scope.zoo5 = zoo5;
	$scope.zoo6 = zoo6;
});

app.directive('calendar', function() {
    // Requires that scope contains a 'monthDays' array.
    // Adds 'weeks' to scope.
    return {
        restrict: 'E',
        replace: true,
        
		
		
//		template: '<table cellspacing="0" cellpadding="0">'
		template: '<table class="table table-bordered" style="width:100%">'
        + '<colgroup span="7"></colgroup>' 
        + '<tbody>' 
        + '<tr class="days">'
//      + '<th scope="col" title="Monday">Mon</th>' 
		+ '<th scope="col" >East West Line</th>'
        + '<th scope="col" >North South Line</th>' 
        + '<th scope="col" >North East Line</th>' 
        + '<th scope="col" >Circle Line</th>' 
        + '<th scope="col" >Downtown Line</th>' 
        + '<th scope="col" >LRT</th>' 
        + '<th scope="col" >MRT / LRT Network Map</th>' 
        + '</tr>'
//      + '<tr ng-repeat="week in weeks">'
//      + '<td ng-repeat="day in week">{{day}}</td>'
//		+ '<td ng-repeat="day in week"><button class="btn btn-lg btn-{{grey}}">{{day}}</button></td>'

//      + '</tr>'
		
		
//		<button class="btn btn-lg btn-danger" ng-click="marsiling = !marsiling">Marsiling</button>
//			<div class="box on" ng-show="marsiling" ng-animate="'box'"></div>
		

		+ '<tr ng-repeat="weekk in weeks1">'
//		+ '<td><button class="btn btn-lg btn-success">{{weeks1[$index]}}</button></td>'
//		+ '<td><button class="btn btn-lg btn-success" ng-click="data.tes = 1">{{weeks1[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-success" ng-click="doSomething(weeks1[$index])">{{weeks1[$index]}}</button></td>'
		
//		<button class="phoneNumber" ng-click="data.tes = 1">1</button>

		+ '</td>'

//		+ '<td><button class="btn btn-lg btn-danger" ng-click="data.tes = weeks2[$index]">{{weeks2[$index]}}</button></td>'
		
//		<a ng-click="doSomething({{value}})" >		
		
		+ '<td><button class="btn btn-lg btn-danger" ng-click="doSomething(weeks2[$index])">{{weeks2[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-custom" ng-click="doSomething(weeks3[$index])">{{weeks3[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-warning" ng-click="doSomething(weeks4[$index])">{{weeks4[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-primary" ng-click="doSomething(weeks5[$index])">{{weeks5[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-grey" ng-click="doSomething(weeks6[$index])">{{weeks6[$index]}}</button></td>'

		+ '</tr>'
		+'</tbody></table>',
        link: function(scope) 
		{
            scope.weeks = [];
			scope.weeks1 = [];
			scope.weeks2 = [];
			scope.weeks3 = [];
			scope.weeks4 = [];
			scope.weeks5 = [];
			scope.weeks6 = [];

			for (var i = 0; i < scope.monthDays.length; i++) 
			{
                if (i % 7 == 0) 
				{
                 	scope.weeks.push([]);	
                }
                scope.weeks[scope.weeks.length-1].push(scope.monthDays[i]);
            }		
			
			for (var i = 0; i < scope.zoo1.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks1.push([]);	
                }
                scope.weeks1[scope.weeks1.length-1].push(scope.zoo1[i]);
            }	
			
			for (var i = 0; i < scope.zoo2.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks2.push([]);	
                }
                scope.weeks2[scope.weeks2.length-1].push(scope.zoo2[i]);
            }
			
			for (var i = 0; i < scope.zoo3.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks3.push([]);	
                }
                scope.weeks3[scope.weeks3.length-1].push(scope.zoo3[i]);
            }	
			
			for (var i = 0; i < scope.zoo4.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks4.push([]);	
                }
                scope.weeks4[scope.weeks4.length-1].push(scope.zoo4[i]);
            }	
			
			for (var i = 0; i < scope.zoo5.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks5.push([]);	
                }
                scope.weeks5[scope.weeks5.length-1].push(scope.zoo5[i]);
            }
			
			for (var i = 0; i < scope.zoo6.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks6.push([]);	
                }
                scope.weeks6[scope.weeks6.length-1].push(scope.zoo6[i]);
            }
			
/*           
			for (var i = 0; i < scope.monthDays.length; i++) 
			{
                if (i % 7 == 0) 
				{
                 	scope.weeks.push([]);	
                }
                scope.weeks[scope.weeks.length-1].push(scope.monthDays[i]);
            }
*/
			
        }
    }
})


app.controller('AppController', function ($scope) 
{
/*	
	$scope.$watch('reset', function()
	{
		$scope.currentLocation = '';
		$scope.destination = '';
    })
	
*/

	$scope.data = {};
	$scope.currentLocation = '';
	$scope.destination = '';
	
//	"doSomething(weeks2[$index])

	$scope.doSomething = function(name) 
	{
//         $scope.destination = name;
		 
		if((!$scope.currentLocation.length && !$scope.destination.length) || 
			(!$scope.currentLocation.length && $scope.destination.length))
		{
			$scope.currentLocation = name;
			
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			 
		}else
		{
			$scope.destination = name;
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    }
	
	
	
	
/*		
	$scope.$watch('boonLay', function()
	{	
		if((!$scope.currentLocation.length && !$scope.destination.length) || 
			(!$scope.currentLocation.length && $scope.destination.length))
		{
			$scope.currentLocation = 'Boon Lay';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			 
		}else
		{
			$scope.destination = 'Boon Lay';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    })
*/


})
