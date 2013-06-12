'use strict';

angular.module('portfolioApp')
  .factory('Projects', ['$location','$routeParams',
    function() {
    // Service logic
    // ...

    var items = [
      {
        'name': 'Grab',
        'type': 'game',
        'size': '22',
        'thumb': 'grab',
        'media': ['grab1.png'],
        'tagline': 'An Android, iOS, Linux, and Windows Game',
        'description': 'nothing here yet',
        'templateUrl': 'views/projects/grab.html',
        'link': 'http://google.com',
        'blog': undefined,
        'github': undefined,
        'technologies': ['Java','C++','LibGDX']
      },
      {
        'name': 'Grab1k',
        'type': 'lab',
        'size': '11',
        'thumb': 'grab1k',
        'media': ['grab1.jpg', 'grab2.jpg'],
        'tagline': 'A Game written in 1024 Bytes of JavaScript',
        'description': 'nothing here yet',
        'link': 'http://influenztial.appspot.com/game',
        'templateUrl': 'views/projects/grab1k.html',
        'blog': undefined,
        'github': undefined,
        'technologies': ['JavaScript', 'Wizardry (this isn\'t really a technology)']
      },
      {
        'name': 'XOPL',
        'type': 'web',
        'size': '22',
        'thumb': 'xopl',
        'media': ['xopl.png', 'xopl1.jpg', 'xopl2.jpg'],
        'tagline': 'A 3D Visualization of Exoplanet Data',
        'description': 'nothing here yet',
        'link': 'http://xoplapp.appspot.com/',
        'blog': undefined,
        'github': 'https://github.com/DerekRies/xopl-web',
        'templateUrl': 'views/projects/xopl.html',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Bootstrap']
      },
      // {
      //   'name': 'Something',
      //   'type': 'lab',
      //   'size': '12',
      //   'media': [],
      //   'tagline': 'nothing',
      //   'description': 'nothing here yet',
      //   'link': 'http://google.com',
      //   'blog': undefined,
      //   'github': 'https://github.com/DerekRies',
      //   'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      // },
      {
        'name': 'Adsupervisors',
        'type': 'web',
        'size': '12',
        'thumb': 'adsupervisors',
        'media': ['adsupervisors1.png', 'adsupervisors2.jpg', 'adsupervisors3.png'],
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
        'size': '21',
        'thumb': 'ontime',
        'media': ['ontime.png', 'ontime2.png'],
        'tagline': 'A Slick HTML5 Task Management Application',
        'description': 'nothing here yet',
        'link': 'http://imontimeapp.appspot.com',
        'blog': undefined,
        'templateUrl': 'views/projects/ontime.html',
        'github': 'https://github.com/DerekRies/ontime',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Bootstrap']
      },
      {
        'name': 'Greek',
        'type': 'tool',
        'size': '11',
        'thumb': 'greek',
        'media': [],
        'videos': [
          {
            'type': 'video/webm',
            'src': 'greek.webm'
          },
          {
            'type': 'video/ogg',
            'src': 'greek.ogv'
          },
          {
            'type': 'video/mp4',
            'src': 'greek.mp4'
          },
        ],
        'tagline': 'A Sublime Text Plugin for Writing Math in Programming Languages Easier',
        'description': 'nothing here yet',
        'link': undefined,
        'templateUrl': 'views/projects/greek.html',
        'blog': undefined,
        'github': 'https://github.com/DerekRies/greek-sublime',
        'technologies': ['Sublime Text', 'Python']
      },
      {
        'name': 'XRAT',
        'type': 'web',
        'size': '21',
        'thumb': 'xrat',
        'media': ['xrat1.png', 'xrat2.png', 'xrat3.png'],
        'tagline': 'Javascript Remote Admin Tool (XSS Botnet)',
        'description': 'nothing here yet',
        'link': 'http://xssrat.appspot.com',
        'blog': undefined,
        'github': 'http://github.com/DerekRies',
        'templateUrl': 'views/projects/xrat.html',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Angular-Sublime',
        'type': 'tool',
        'size': '11',
        'thumb': 'angularsublime',
        'media': [],
        'videos': [
          {
            'type': 'video/webm',
            'src': 'angularsublime.webm'
          },
          {
            'type': 'video/ogg',
            'src': 'angularsublime.ogv'
          },
          {
            'type': 'video/mp4',
            'src': 'angularsublime.mp4'
          }
        ],
        'tagline': 'Sublime Text Plugin for Yeoman and Generator-Angular',
        'description': 'nothing here yet',
        'link': undefined,
        'blog': undefined,
        'github': 'https://github.com/DerekRies/generator-angular-sublime',
        'templateUrl': 'views/projects/angularsublime.html',
        'technologies': ['Sublime Text', 'Python', 'Angularjs', 'Yeoman']
      },
      {
        'name': 'RNG',
        'type': 'mobile',
        'size': '11',
        'thumb': 'rng',
        'media': ['rng.png'],
        'tagline': 'A Mobile Application Built With Web Technologies',
        'description': 'nothing here yet',
        'link': 'http://dev.rngapp.appspot.com',
        'blog': undefined,
        'templateUrl': 'views/projects/rng.html',
        'github': 'http://github.com/DerekRies',
        'technologies': ['Angularjs', 'Google App Engine', 'Python', 'Javascript', 'Yeoman', 'Bootstrap']
      },
      {
        'name': 'Angular-Notifications',
        'type': 'lib',
        'size': '11',
        'thumb': 'angularnoti',
        'media': [],
        'tagline': 'An Angular-Component for Doing Notifications',
        'description': 'nothing here yet',
        'link': 'http://derekries.github.io/angular-notifications/',
        'blog': undefined,
        'templateUrl': 'views/projects/angularnotifications.html',
        'github': 'http://github.com/DerekRies/angular-notifications',
        'technologies': ['Angularjs', 'JavaScript']
      }
    ];

    // Public API here
    return {
      get: function (id) {
        if(typeof id === 'undefined'){
          return items;
        }
        else{
          return this.getById(id);
        }
      },
      getLength: function () {
        return items.length;
      },
      getById: function (id) {
        return items[id];
      },
      getIndex: function (key, value) {
        for(var i = 0, l = items.length ; i < l ; i++){
          if(items[i][key] === value){
            return i;
          }
        }
        return -1;
      },
      getByName: function (name) {
        var index = this.getIndex('name', name);
        if(index !== -1){
          return items[index];
        }
        // for(var i = 0, l = items.length ; i < l ; i++){
        //   if(items[i].name === name){
        //     return items[i];
        //   }
        // }
        return false;
      }
    };
  }]);
