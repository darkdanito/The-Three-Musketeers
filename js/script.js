var app = angular.module('my-app', [], function () 
{
})

var monthDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var column1 = ["Boon Lay","Chinese Garden","Lakeside","Tiong Bahru","X"];
var column2 = ["Marsiling","Sembawang","Somerset","Yishun","X"];
var column3 = ["Boon Keng","Farrer Park","Kovan","Sengkang","X"];
var column4 = ["Bayfront","Dakota","One North","Bayfront","X"];
var column5 = ["Bayfront","Bugis","Chinatown","Downtown","X"];
var column6 = ["Bangkit","Bukit Panjang","Fajar","Pending","X"];

app.controller('MyCtrl', function($scope) 
{
    $scope.monthDays = monthDays;

	$scope.column1 = column1;
	$scope.column2 = column2;
	$scope.column3 = column3;
	$scope.column4 = column4;
	$scope.column5 = column5;
	$scope.column6 = column6;
});

app.directive('calendar', function() 
{
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

		+ '<tr ng-repeat="weekk in weeks1">'
//		+ '<td><button class="btn btn-lg btn-success">{{weeks1[$index]}}</button></td>'
//		+ '<td><button class="btn btn-lg btn-success" ng-click="data.tes = 1">{{weeks1[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-success" ng-click="doSomething(weeks1[$index])">{{weeks1[$index]}}</button></td>'
		
//		<button class="phoneNumber" ng-click="data.tes = 1">1</button>

//		+ '</td>'

//		+ '<td><button class="btn btn-lg btn-danger" ng-click="data.tes = weeks2[$index]">{{weeks2[$index]}}</button></td>'
		
		+ '<td><button class="btn btn-lg btn-danger" ng-click="doSomething(weeks2[$index])">{{weeks2[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-custom" ng-click="doSomething(weeks3[$index])">{{weeks3[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-warning" ng-click="doSomething(weeks4[$index])">{{weeks4[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-primary" ng-click="doSomething(weeks5[$index])">{{weeks5[$index]}}</button></td>'
		+ '<td><button class="btn btn-lg btn-grey" ng-click="doSomething(weeks6[$index])">{{weeks6[$index]}}</button></td>'

		
//                    <td rowspan="10">
//                        <a class="thumbnail"><img src="images/Full Map.jpg" ng-click="enlarge()" alt="logo" width="100%"></a>
//                    </td>

		
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
			
			for (var i = 0; i < scope.column1.length; i++) 
			{
                if (i % 1 == 0) 
				{
                 	scope.weeks1.push([]);
					scope.weeks2.push([]);	
					scope.weeks3.push([]);
					scope.weeks4.push([]);
					scope.weeks5.push([]);
					scope.weeks6.push([]);
                }
                scope.weeks1[scope.weeks1.length-1].push(scope.column1[i]);
				scope.weeks2[scope.weeks2.length-1].push(scope.column2[i]);
				scope.weeks3[scope.weeks3.length-1].push(scope.column3[i]);
				scope.weeks4[scope.weeks4.length-1].push(scope.column4[i]);
				scope.weeks5[scope.weeks5.length-1].push(scope.column5[i]);
				scope.weeks6[scope.weeks6.length-1].push(scope.column6[i]);
            }	
						
        }
    }
})


app.controller('AppController', function ($scope) 
{
	$scope.data = {};
	$scope.currentLocation = '';
	$scope.destination = '';
	
	$scope.doSomething = function(name) 
	{		 
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
})
