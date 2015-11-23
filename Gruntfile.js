'use strict';

module.exports = function (grunt) {
    // configure tasks
    grunt.initConfig({
        mochaTest: {
          test: {
            src: ['tests/sample-spec.js'],
          },
        },

        parallel: {
            assets: {
                options: {
                    grunt: true
                },
                tasks: ['run_windows10_edge', 'run_Windows7_ie_10',
                        'run_XP_firefox_37', 'run_Windows8_chrome_40',
                        'run_OSX10.10_safari_8']
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('Windows10_edge', function(n) {
      process.env.BROWSER = 'microsoftedge';
      process.env.VERSION = '20.10240';
      process.env.PLATFORM = 'Windows 10';
    });

    grunt.registerTask('Windows7_ie_10', function(n) {
      process.env.BROWSER = 'internet explorer';
      process.env.VERSION = '10';
      process.env.PLATFORM = 'Windows 7';
    });

    grunt.registerTask('XP_firefox_37', function(n) {
      process.env.BROWSER = 'firefox';
      process.env.VERSION = '37';
      process.env.PLATFORM = 'XP';
    });

    grunt.registerTask('Windows8_chrome_40', function(n) {
      process.env.BROWSER = 'chrome';
      process.env.VERSION = '40';
      process.env.PLATFORM = 'Windows 8';
    });

    grunt.registerTask('OSX10.10_safari_8', function(n) {
      process.env.BROWSER = 'safari';
      process.env.VERSION = '8';
      process.env.PLATFORM = 'OS X 10.10';
    });

    // register tasks
    grunt.registerTask('default', ['parallel']);

    grunt.registerTask('run_windows10_edge', ['Windows10_edge', 'mochaTest']);
    grunt.registerTask('run_Windows7_ie_10', ['Windows7_ie_10', 'mochaTest']);
    grunt.registerTask('run_XP_firefox_37', ['XP_firefox_37', 'mochaTest']);
    grunt.registerTask('run_Windows8_chrome_40', ['Windows8_chrome_40', 'mochaTest']);
    grunt.registerTask('run_OSX10.10_safari_8', ['OSX10.10_safari_8', 'mochaTest']);
};
