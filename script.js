var app = angular.module('my-app', [], function () 
{
})

app.controller('AppController', function ($scope) 
{
    $scope.toggle = true;
	$scope.currentLocation = '';
	$scope.destination = '';
	
	
	$scope.$watch('boonLay', function()
	{	
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
	
	$scope.$watch('marsiling', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
			$scope.currentLocation = $scope.marsiling ? '' : 'Marsiling'; 
		}else
		{
			$scope.destination = $scope.marsiling ? '' : 'Marsiling';
		}
    })	
	
	$scope.$watch('dakota', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
			$scope.currentLocation = $scope.dakota ? '' : 'Dakota'; 
		}else
		{
			$scope.destination = $scope.dakota ? '' : 'Dakota';
		}
    })
	
	$scope.$watch('tiongBahru', function()
	{
		if(!$scope.currentLocation.length && !$scope.destination.length)
		{
			$scope.currentLocation = $scope.tiongBahru ? '' : 'Tiong Bahru'; 
		}else
		{
			$scope.destination = $scope.tiongBahru ? '' : 'Tiong Bahru';
		}
    })
	
	$scope.$watch('reset', function()
	{
		$scope.currentLocation = '';
		$scope.destination = '';
    })
		
})