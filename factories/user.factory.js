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
      show: function() {
        return $http({
          method: 'GET',
          url: "http://localhost:7000/api/user/dashboard"
        })
      },
      search: function(username) {
        return $http({
          method: 'POST',
          url: 'http://localhost:7000/api/user/search',
          data: {username: username.toLowerCase()}
        })
      },
      update: function(user) {
        return $http({
          method: 'POST',
          url: 'http://localhost:7000/api/user/update',
          data: {user: user}
        })
      }
    }
  }
}())
