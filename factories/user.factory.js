"use strict";

(function() {
  angular
  .module("roomtrack")
  .factory("userFactory", [
    "$http",
    "$stateParams",
    userFactoryFunction
  ])

  function userFactoryFunction($http) {
    return {
      create: function(newUser) {
        return $http({
          method: 'POST',
          url: 'http://localhost:7000/user',
          data: newUser
        })
      },
      show: function(userId) {
        return $http({
          method: 'GET',
          url: `http://localhost:7000/api/user/${userId}`
        })
      }
    }
  }
}())
