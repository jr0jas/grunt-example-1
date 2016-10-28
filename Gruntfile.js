'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
  		pkg: grunt.file.readJSON('package.json'),
  		clean : {

			output: ['log/*', 'dist/*']
		},
		jshint: {
			options: {
				force: true,
				'-W069': false,
				'-W004': false,
				ignores: ['./src/js/_ignores/*.js'],
				reporterOutput: './log/jshint.txt'
			},
			files: ['./src/js/*.js']
		},
		uglify: {
			my_target: {
		      files: [{
		          expand: true,
		          cwd: 'src/js',
		          src: '**/*.js',
		          dest: 'dist/js',
		          ext: '.min.js'
		      }]
		    },
			options: {
				mangle: false,
				sourceMap: true,
        		sourceMapName: 'dist/js/sourcemap.map',
				compress: {
					drop_console: true
				},
				//beautify: true
			}
		},concat: {
	      css: {
	        src: ['scr/scss/*.scss'],
	        dest: 'dist/css/style.css'
	      },
	      js: {
	        options: {
	          separator: ';'
	        },
	        src: ['dist/js/*.js'],
	        dest: 'dist/js/bundle.js'
      	  }
    	}
			
	});

	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'concat']);

};