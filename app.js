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
    .state("userNew", {
      url: "/user/new",
      controller: "userNewController",
      controllerAs: "VM",
      templateUrl: "views/user/new.html"
    })
    .state("userEdit", {
      url: "/user/:id/edit",
      controller: "userEditController",
      controllerAs: "VM",
      templateUrl: "views/user/edit.html"
    })
    .state("userIndex", {
      url: "/user",
      controller: "userIndexController",
      controllerAs: "VM",
      templateUrl: "views/user/index.html"
    })
    .state("userShow", {
      url: "/user/:id",
      controller: "userShowController",
      controllerAs: "VM",
      templateUrl: "views/user/show.html"
    })
    .state("requestIndex", {
      url: "/user/:id/requests",
      controller: "requestsIndexController",
      controllerAs: "VM",
      templateUrl: "views/request/index.html"
    })
  }
}())
