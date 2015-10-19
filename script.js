var app = angular.module('my-app', [], function () 
{
})

app.controller('AppController', function ($scope) 
{
    $scope.toggle = true;
	$scope.currentLocation = '';
	$scope.destination = '';
	$scope.counter = 0;
	$scope.$watch('boonLay', function()
	{	
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.boonLay ? '' : 'Boon Lay'; 
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
	
	$scope.$watch('lakeside', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.lakeside ? '' : 'Lakeside'; 
			$scope.currentLocation = 'Lakeside';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			
		}else
		{
			$scope.destination = 'Lakeside';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    })
	
	$scope.$watch('chineseGarden', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.chineseGarden ? '' : 'Chinese Garden'; 
			$scope.currentLocation = 'Chinese Garden';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			 
		}else
		{
			$scope.destination = 'Chinese Garden';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    })
	
	$scope.$watch('marsiling', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.marsiling ? '' : 'Marsiling'; 
			$scope.currentLocation = 'Marsiling';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			 
		}else
		{
			$scope.destination = 'Marsiling';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    })	
	
	$scope.$watch('dakota', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.dakota ? '' : 'Dakota'; 
			$scope.currentLocation = 'Dakota';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			 
		}else
		{
			$scope.destination = 'Dakota';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    })
	
	$scope.$watch('tiongBahru', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.tiongBahru ? '' : 'Tiong Bahru'; 
			$scope.currentLocation = 'Tiong Bahru';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			
		}else
		{
			$scope.destination = 'Tiong Bahru';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}				
			} 			
		}
    })
	
	$scope.$watch('oneNorth', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.oneNorth ? '' : 'One North'; 
			$scope.currentLocation = 'One North';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 
		}else
		{
			$scope.destination = 'One North';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}				
			} 			
		}
    })
	
	$scope.$watch('bayfront', function()
	{
		if((!$scope.currentLocation.length && !$scope.destination.length) || (!$scope.currentLocation.length && $scope.destination.length))
		{
//			$scope.currentLocation = $scope.bayfront ? '' : 'Bayfront'; 
			$scope.currentLocation = 'Bayfront';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.currentLocation = '';
			} 			
		}else
		{
			$scope.destination = 'Bayfront';
			if ($scope.currentLocation == $scope.destination)
			{
				$scope.destination = '';
			}			
		}
    })
	
	$scope.$watch('reset', function()
	{
		$scope.currentLocation = '';
		$scope.destination = '';
    })
	
	$scope.$watch('resetCurrent', function()
	{
		$scope.currentLocation = '';
    })
	
	$scope.$watch('resetDestination', function()
	{
		$scope.destination = '';
    })	
    
	$scope.enlarge = function () {
	    $scope.counter += 1;
	    if ($scope.counter == 1) {
	        $scope.images = ['images/Full Map.jpg'];
	    } else {
	        $scope.images = [''];
	        $scope.counter = 0;
	    }
	    
	}
		
})
