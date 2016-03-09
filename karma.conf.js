module.exports = function (config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      { pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true },

      { pattern: 'src/**/*.js', included: false, watched: true },
      // 'node_modules/phantomjs-polyfill/bind-polyfill.js',
      // 'node_modules/es6-shim/es6-shim.js',
      // 'src/*.js'
    ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
}