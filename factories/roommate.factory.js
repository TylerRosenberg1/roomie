"use strict";

(function() {
  angular
  .module("roomtrack")
  .factory("roommateFactory", [
    "$http",
    roommateFactoryFunction
  ])

  function roommateFactoryFunction($http) {
    return {
      create: function(roommateId) {
        return $http({
          method: 'POST',
          url: "http://localhost:7000/api/roommate",
          data: {roommateId: roommateId}
        })
      },
      index: function() {
        return $http({
          method: 'GET',
          url: `http://localhost:7000/api/user/roommate/requests`
        })
      },
      update: function(requesterId) {
        return $http({
          method: 'PUT',
          url: `http://localhost:7000/api/roommate/${requesterId}/update`
        })
      },
      destroy: function(requesterId) {
        return $http({
          method: 'DELETE',
          url: `http://localhost:7000/api/roommate/${requesterId}/delete`
        })
      }
    }
  }
}())
