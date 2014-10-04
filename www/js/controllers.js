angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $cordovaGeolocation, GeolocationCalculator) {
  $scope.lo = {};


  $scope.markPoints = [
    {
      name: 'วงเวียนเสาไฟ',
      latitude: 14.161119,
      longitude: 101.348319,
      distance: 0
    },
    {
      name: 'แยกหอพัก',
      latitude: 14.163044,
      longitude: 101.351140,
      distance: 200
    },
    {
      name: 'โค้ง',
      latitude: 14.160661,
      longitude: 101.359069,
      distance: 8000
    },
    {
      name: 'โรงแรม',
      latitude: 14.162076,
      longitude: 101.361708,
      distance: 100
    },
    {
      name: 'ป้องยาม',
      latitude: 14.163772,
      longitude: 101.365581,
      distance: 0
    },
    {
      name: 'ป้าตุ',
      latitude: 14.172573,
      longitude: 101.357405,
      distance: 0
    }
  ];


  var watch = $cordovaGeolocation.watchPosition({ enableHighAccuracy: true, maximumAge: 1000,frequency: 500 });
  watch.promise.then(function() { /* Not  used */ },
    function(err) {
      alert(err);
    },
    function(position) {
      $scope.lo = position;

      for(var i =0;i<$scope.markPoints.length;i++) {
        var point = $scope.markPoints[i];
        $scope.markPoints[i].distance = GeolocationCalculator.haversine(position.coords, point);
      }

  });

  $scope.getTime = function(){
    var date = new Date($scope.lo.timestamp);
    return date.toString();
  };





  // $scope.getLocation = function() {
  //   $cordovaGeolocation
  //     .getCurrentPosition()
  //     .then(function(position) {
  //       var lat = position.coords.latitude;
  //       var long = position.coords.longitude;
  //       $scope.lo = position;
  //     }, function(err) {
  //       // error
  //     });
  // };





})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {});
