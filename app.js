"use strict";

(function() {
  angular
  .module("roomtrack", [
    "ui.router"
  ])
  .config([
    "$stateProvider",
    routerFunction
  ])

  function routerFunction($stateProvider) {
    $stateProvider
    .state("userShow", {
      url: "/user/:id",
      controller: "userShowController",
      controllerAs: "VM",
      templateUrl: "views/user/show.html"
    })
  }
}())
