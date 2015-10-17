var app = angular.module('my-app', [], function () 
{
})

app.controller('AppController', function ($scope) 
{
    $scope.toggle = true;
	$scope.currentLocation = '';
	$scope.destination = '';

	$scope.rootCurrent = '';
	$scope.rootDestination = '';

	$scope.$watch('boonLay', function()
	{	
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.boonLay ? '' : 'Boon Lay'; 
			$scope.currentLocation = 'Boon Lay'; 
			$scope.rootCurrent = 'Boon Lay'; 
		}else
		{
			$scope.destination = $scope.boonLay ? '' : 'Boon Lay';
			$scope.rootDestination = $scope.boonLay ? '' : 'Boon Lay';
		}
    })
	
	$scope.$watch('lakeside', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.lakeside ? '' : 'Lakeside'; 
			$scope.currentLocation = 'Lakeside';
		}else
		{
			$scope.destination = $scope.lakeside ? '' : 'Lakeside';
		}
    })
	
	$scope.$watch('chineseGarden', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.chineseGarden ? '' : 'Chinese Garden'; 
			$scope.currentLocation = 'Chinese Garden'; 
		}else
		{
			$scope.destination = $scope.chineseGarden ? '' : 'Chinese Garden';
		}
    })
	
	$scope.$watch('marsiling', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.marsiling ? '' : 'Marsiling'; 
			$scope.currentLocation = 'Marsiling'; 
		}else
		{
			$scope.destination = $scope.marsiling ? '' : 'Marsiling';
		}
    })	
	
	$scope.$watch('dakota', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.dakota ? '' : 'Dakota'; 
			$scope.currentLocation = 'Dakota'; 
		}else
		{
			$scope.destination = $scope.dakota ? '' : 'Dakota';
		}
    })
	
	$scope.$watch('tiongBahru', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.tiongBahru ? '' : 'Tiong Bahru'; 
			$scope.currentLocation = 'Tiong Bahru';
		}else
		{
			$scope.destination = $scope.tiongBahru ? '' : 'Tiong Bahru';
		}
    })
	
	$scope.$watch('oneNorth', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.oneNorth ? '' : 'One North'; 
			$scope.currentLocation = 'One North'; 
		}else
		{
			$scope.destination = $scope.oneNorth ? '' : 'One North';
		}
    })
	
	$scope.$watch('bayfront', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
//			$scope.currentLocation = $scope.bayfront ? '' : 'Bayfront'; 
			$scope.currentLocation = 'Bayfront';
		}else
		{
			$scope.destination = $scope.bayfront ? '' : 'Bayfront';
		}
    })
	
	$scope.$watch('reset', function()
	{
		$scope.currentLocation = '';
		$scope.destination = '';
    })
    
    	$scope.showPopover = function () {
	    $scope.popoverIsVisible = true;
	}

	$scope.hidePopover = function () {
	    $scope.popoverIsVisible = false;
	}
		
})
