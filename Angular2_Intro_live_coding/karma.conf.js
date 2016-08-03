var path = require('path');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (e.g. files, exclude)
    basePath: '',
    // proxied base paths
    // proxies: {
    //   // required for images that would be copied elsewhere in prod
    //   '/assets/': '/base/src/assets/'
    // },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files to exclude
    exclude: [ ],

    // list of files / patterns to load in the browser
    //
    // Provide sinon in the karma browser. Webpack and sinon are not woring well together right now
    // https://github.com/webpack/webpack/issues/304
    // And even with the suggestions, I can't make it work (probably a problem with the typings and
    // the way it all plugs itself out)
    files: [
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/lodash/lodash.min.js',
      {pattern: 'test/*.js', watched: true},
      {pattern: 'src/assets/**/*.png', watched: false, included: false, served: true},
    ],
    // // preprocess matching files before serving them to the browser
    // // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    // preprocessors: { 'spec-bundle.js': ['coverage', 'sourcemap'] },
    //
    // coverageReporter: {
    //   dir : 'coverage/',
    //   reporters: [
    //     { type: 'text-summary' },
    //     { type: 'json' },
    //     { type: 'html' }
    //   ],
    // },
    //
    // // Webpack please don't spam the console when running in karma!
    // webpackServer: { noInfo: true },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'mocha', 'coverage' ],

    mochaReporter: {
      ignoreSkipped: false,
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [ 'PhantomJS' ],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });

};
