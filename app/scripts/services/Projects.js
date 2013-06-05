'use strict';

angular.module('portfolioApp')
  .factory('Projects', [function() {
    // Service logic
    // ...

    var items = [
      {
        'name': 'Grab',
        'type': 'game',
        'size': '22',
        'media': [],
        'tagline': 'An Android, iOS, Linux, and Windows Game',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': undefined,
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'XOPL',
        'type': 'web',
        'size': '12',
        'media': [],
        'tagline': 'A 3D Visualization of Exoplanet Data',
        'description': 'nothing here yet',
        'link': 'http://xoplapp.appspot.com/',
        'blog': undefined,
        'github': 'https://github.com/DerekRies/xopl-web',
        'templateUrl': 'views/projects/xopl.html',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Something',
        'type': 'lab',
        'size': '22',
        'media': [],
        'tagline': 'nothing',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'https://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Adsupervisors',
        'type': 'web',
        'size': '12',
        'media': [],
        'tagline': 'A Third Party Traffic Monitor',
        'description': 'nothing here yet',
        'templateUrl': 'views/projects/adsupervisors.html',
        'link': 'http://adsupervisors.appspot.com',
        'blog': undefined,
        'github': 'https://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'd3.js', 'Bootstrap']
      },
      {
        'name': 'OnTime',
        'type': 'web',
        'size': '11',
        'media': [],
        'tagline': 'A Slick HTML5 Task Management Application',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'https://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Bootstrap']
      },
      {
        'name': 'Greek',
        'type': 'tool',
        'size': '11',
        'media': [],
        'tagline': 'nothing',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'https://github.com/DerekRies/greek-sublime',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'XRAT',
        'type': 'web',
        'size': '21',
        'media': [],
        'tagline': 'Javascript Remote Admin Tool (XSS Botnet)',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'http://github.com/DerekRies',
        'templateUrl': 'views/projects/xrat.html',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'AngularSublime',
        'type': 'tool',
        'size': '11',
        'media': [],
        'tagline': 'Sublime Text Plugin for Yeoman and Generator-Angular',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'https://github.com/DerekRies/generator-angular-sublime',
        'templateUrl': 'views/projects/angularsublime.html',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Something',
        'type': 'lab',
        'size': '11',
        'media': [],
        'tagline': 'nothing',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'http://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Something',
        'type': 'lab',
        'size': '11',
        'media': [],
        'tagline': 'nothing',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'http://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Something',
        'type': 'mobile',
        'size': '11',
        'media': [],
        'tagline': 'nothing',
        'description': 'nothing here yet',
        'link': 'http://google.com',
        'blog': undefined,
        'github': 'http://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
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
      },
      getByName: function(name){
        for(var i = 0, l = items.length ; i < l ; i++){
          if(items[i].name === name){
            return items[i];
          }
        }
        return false;
      }
    };
  }]);
