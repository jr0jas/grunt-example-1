'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),
  		clean : {
			output: ['log/*']
		},
		// typescript: {
		// 	options: {
		// 		module: 'commonsjs'
		// 	},
		// 	all: {
		// 		src: [''],
		// 		dest: ''
		// 	}
		// },
		jshint: {
			options: {
				//force: true,
				'-W069': false,
				'-W004': false,
				ignores: ['./scr/js/_ignores/*.js'],
				reporterOutput: './log/jshint.txt'
			},
			files: ['./src/js/*.js']
		},
  		
	});

	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	// grunt.registerTask('default', ['clean','typescript', 'jshint']);
	grunt.registerTask('default', ['clean', 'jshint']);

};