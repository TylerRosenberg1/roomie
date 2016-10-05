"use strict";

(function() {
  angular
  .module("roomietrack")
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
          url: 'https://roomietrack.herokuapp.com/user',
          data: newUser
        })
      },
      show: function() {
        return $http({
          method: 'GET',
          url: "https://roomietrack.herokuapp.com/api/user/dashboard"
        })
      },
      search: function(username) {
        return $http({
          method: 'POST',
          url: 'https://roomietrack.herokuapp.com/api/user/search',
          data: {username: username.toLowerCase()}
        })
      },
      update: function(user) {
        return $http({
          method: 'POST',
          url: 'https://roomietrack.herokuapp.com/api/user/update',
          data: {user: user}
        })
      }
    }
  }
}())
