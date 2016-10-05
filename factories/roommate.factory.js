"use strict";

(function() {
  angular
  .module("roomietrack")
  .factory("roommateFactory", [
    "$http",
    roommateFactoryFunction
  ])

  function roommateFactoryFunction($http) {
    return {
      create: function(roommateId) {
        return $http({
          method: 'POST',
          url: "http://roomietrack.herokuapp.com/api/roommate",
          data: {roommateId: roommateId}
        })
      },
      index: function() {
        return $http({
          method: 'GET',
          url: `http://roomietrack.herokuapp.com/api/user/roommate/requests`
        })
      },
      update: function(requesterId) {
        return $http({
          method: 'PUT',
          url: `http://roomietrack.herokuapp.com/api/roommate/${requesterId}/update`
        })
      },
      destroy: function(requesterId) {
        return $http({
          method: 'DELETE',
          url: `http://roomietrack.herokuapp.com/api/roommate/${requesterId}/delete`
        })
      }
    }
  }
}())
