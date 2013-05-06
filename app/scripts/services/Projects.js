'use strict';

angular.module('portfolioApp')
  .factory('Projects', [function() {
    // Service logic
    // ...

    var items = [
      {
        'name': 'Grab',
        'type': 'game',
        'size': '22'
      },
      {
        'name': 'XOPL',
        'type': 'web',
        'size': '12'
      },
      {
        'name': 'Something',
        'type': 'lab',
        'size': '22'
      },
      {
        'name': 'Adsupervisors',
        'type': 'web',
        'size': '12'
      },
      {
        'name': 'OnTime',
        'type': 'web',
        'size': '11'
      },
      {
        'name': 'Greek',
        'type': 'tool',
        'size': '11'
      },
      {
        'name': 'XRAT',
        'type': 'web',
        'size': '21'
      },
      {
        'name': 'AngularSublime',
        'type': 'tool',
        'size': '11'
      },
      {
        'name': 'Something',
        'type': 'lab',
        'size': '11'
      },
      {
        'name': 'Something',
        'type': 'lab',
        'size': '11'
      },
      {
        'name': 'Something',
        'type': 'mobile',
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
