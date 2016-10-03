"use strict";

(function() {
  angular
  .module("roomtrack")
  .factory("requestFactory", [
    "$http",
    "$stateParams",
    requestFactoryFunction
  ])

  function requestFactoryFunction($http) {
    return {
      create: function(newRequest, requestRecieverId) {
        return $http({
          method: 'POST',
          url: "http://localhost:7000/api/request",
          data: {description: newRequest.description, amount: parseInt(newRequest.amount), requestRecieverId: requestRecieverId}
        })
      },
      update: function(roommateId, requestId) {
        return $http({
          method: 'PUT',
          url: `http://localhost:7000/api/user/${roommateId}/request/${requestId}/update`
        })
      },
      destroy: function(roommateId, requestId) {
        return $http({
          method: 'DELETE',
          url: `http://localhost:7000/api/user/${roommateId}/request/${requestId}/delete`
        })
      }
    }
  }
}())
