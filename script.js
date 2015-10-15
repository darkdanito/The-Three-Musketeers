var app = angular.module('my-app', [], function () 
{
})

app.controller('AppController', function ($scope) 
{
    $scope.toggle = true;
	$scope.currentLocation = '';
	$scope.destination = '';

/*  
	if($scope.toggle.length)
	{
		$scope.toggle = 'if statement';
	}else
	{
		$scope.toggle = 'else statement';
		$scope.destination = 'aaa';
	}

	$scope.$watch('toggle', function()
	{
        $scope.toggleText = $scope.toggle ? 'Toggle!' : 'some text 2';
    })
*/
	$scope.$watch('boonLay', function()
	{
//		$scope.destination = $scope.boonLay ? '' : 'Boon Lay';
//		$scope.station = $scope.boonLay ? '' : 'Boon Lay'; 
		
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
			$scope.currentLocation = $scope.boonLay ? '' : 'Boon Lay'; 
		}else
		{
			$scope.destination = $scope.boonLay ? '' : 'Boon Lay';
		}
		
    })
	
	$scope.$watch('lakeside', function()
	{
//      $scope.currentLocation = $scope.lakeside ? '' : 'Lakeside';
//		$scope.station = $scope.lakeside ? '' : 'Lakeside';

		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
			$scope.currentLocation = $scope.lakeside ? '' : 'Lakeside'; 
		}else
		{
			$scope.destination = $scope.lakeside ? '' : 'Lakeside';
		}
    })
	
	$scope.$watch('chineseGarden', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
			$scope.currentLocation = $scope.chineseGarden ? '' : 'Chinese Garden'; 
		}else
		{
			$scope.destination = $scope.chineseGarden ? '' : 'Chinese Garden';
		}
    })
	
	$scope.$watch('reset', function()
	{
		$scope.currentLocation = '';
		$scope.destination = '';
    })
		
})