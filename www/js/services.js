angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('GeolocationCalculator', function() {
  return {
    rad: function(x) { return x * Math.PI / 180; },
    haversine: function(p1, p2) {
      var R = 6371;
      var dLat = this.rad(p2.latitude - p1.latitude);
      var dLong = this.rad(p2.longitude - p1.longitude);

      var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.rad(p1.latitude)) * Math.cos(this.rad(p2.latitude)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;

      return Math.round(d*1000);
    }
  };
})


.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Scruff McGruff'
  }, {
    id: 1,
    name: 'G.I. Joe'
  }, {
    id: 2,
    name: 'Miss Frizzle'
  }, {
    id: 3,
    name: 'Ash Ketchum'
  }];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
