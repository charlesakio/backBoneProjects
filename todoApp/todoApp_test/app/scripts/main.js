/*global require*/
require.config({
  shim: {
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone'
  // mustache: '../bower_components/mustache/mustache'
  }
})

define(['app'], function (App) {
  App.initialize()
})
