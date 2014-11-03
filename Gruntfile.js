module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: ["./*.js"]
    },
    simplemocha: {
      src: ['test/*.js']
    }
  });

  // Load the plugins that provides the tasks.
  // 1) in package.json d'y 2) npm install 3) then loadNpmTask
  // 4) grunt --help will list all available tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // register default task
  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default',  ['test']);

  // 5) npm test
};
