'use strict';

angular.module('portfolioApp')
  .factory('Projects', [function() {
    // Service logic
    // ...

    var items = [
      {
        'name': 'Grab',
        'type': 'Game',
        'size': '22'
      },
      {
        'name': 'XOPL',
        'type': 'Web',
        'size': '12'
      },
      {
        'name': 'Something',
        'type': 'Lab',
        'size': '22'
      },
      {
        'name': 'Adsupervisors',
        'type': 'Web',
        'size': '12'
      },
      {
        'name': 'OnTime',
        'type': 'Web',
        'size': '11'
      },
      {
        'name': 'Greek',
        'type': 'Tool',
        'size': '11'
      },
      {
        'name': 'XRAT',
        'type': 'Web',
        'size': '21'
      },
      {
        'name': 'AngularSublime',
        'type': 'Tool',
        'size': '11'
      },
      {
        'name': 'Something',
        'type': 'Lab',
        'size': '11'
      },
      {
        'name': 'Something',
        'type': 'Lab',
        'size': '11'
      },
      {
        'name': 'Something',
        'type': 'Mobile',
        'size': '11'
      }
    ];

    // Public API here
    return {
      get: function(id) {
        if(typeof id === 'undefined'){
          return items;
        }
        else{
          return this.getById(id);
        }
      },
      getById: function(id){
        return items[id];
      }
    };
  }]);
