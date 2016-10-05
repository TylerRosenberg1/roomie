"use strict";

(function() {
  angular
  .module("roomietrack")
  .factory("requestFactory", [
    "$http",
    requestFactoryFunction
  ])

  function requestFactoryFunction($http) {
    return {
      create: function(newRequest, requestRecieverId) {
        return $http({
          method: 'POST',
          url: "http://roomietrack.herokuapp.com/api/request",
          data: {description: newRequest.description, amount: parseInt(newRequest.amount), requestRecieverId: requestRecieverId}
        })
      },
      update: function(roommateId, requestId) {
        return $http({
          method: 'PUT',
          url: `http://roomietrack.herokuapp.com/api/user/${roommateId}/request/${requestId}/update`
        })
      },
      destroy: function(roommateId, requestId) {
        return $http({
          method: 'DELETE',
          url: `http://roomietrack.herokuapp.com/api/user/${roommateId}/request/${requestId}/delete`
        })
      }
    }
  }
}())
