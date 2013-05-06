## Portfolio Site

This portfolio site is done using Angular.js and Google App Engine with some help from yeoman and my own tool on top of Yeoman (for building applications with angular and app engine) called Bliss.

At the moment, the application runs through a grunt proxy server which lets google app engine and yeoman run on different servers yet it looks the same to the angular application. When deploying to production, will need to upload the dist folder that gets built, as well as copy over the .tmp/main.css file thats getting created to the dist/styles directory (due to a bug with generator-angular that leaves the blank main.css file in the build).
