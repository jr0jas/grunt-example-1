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
	      /*css: {
	        src: ['scr/scss/*.scss'],
	        dest: 'dist/css/style.css'
	      },*/
	      js: {
	        options: {
	          separator: ';'
	        },
	        src: ['dist/js/*.js'],
	        dest: 'dist/js/bundle.js'
      	  }
    	},htmlhint: {
    		templates: {
    			options: {
    				'attr-lower-case': true,
    				'attr-value-not-empty': true,
    				'tag-pair': true,
    				'tag-self-close': true,
    				'tagname-lowercase': true,
    				'id-class-value': true,
    				'id-class-unique': true,
    				'src-not-empty': true,
    				'img-alt-required': true
    			},
    			src:'src/templates/*.html'
    		}
    	},sass: {
		    dist: {
		      files: [{
		        expand: true,
		        sourcemap: 'inline',
		        style: 'compressed',
		        cwd: 'src/sass/',
		        src: ['*main.scss'],
		        dest: 'dist/css/',
		        ext: '.css'
		      }]
		    }
  		},
  		csslint: {
		  strict: {
		    options: {
		      import: 2
		    },
		    src: ['dist/css/main.css']
		  },
		  lax: {
		    options: {
		      import: false
		    },
		    src: ['dist/css/main.css']
		  }
		},
		cssmin: {
		  options: {
		    mergeIntoShorthands: false,
		    roundingPrecision: -1
		  },
		  cssmin: {
		    minify: [{
		      expand: true,
		      cwd: 'dist/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'dist/css',
		      ext: '.min.css',
		      extDot: 'last'
		    }]
		  },
		  concat: {
		  	options: {},
		  	files: {
		  		'dist/css/main.css': ['dist/css/*.css']
		  	}
		  }
		}
			
	});

	
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-typescript');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-htmlhint');
	grunt.loadNpmTasks('grunt-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	/*
		npm install  grunt-contrib-clean --save-dev
		npm install  grunt-typescript --save-dev
		npm install  grunt-contrib-jshint --save-dev
		npm install  grunt-contrib-uglify --save-dev
		npm install  grunt-contrib-concat --save-dev
		npm install  grunt-htmlhint --save-dev
		npm install  grunt-htmlmin --save-dev
		npm install  grunt-contrib-sass --save-dev
		npm install  grunt-contrib-jshint --save-dev
		npm install  grunt-contrib-csslint --save-dev

	*/

	grunt.registerTask('default', ['clean', 'jshint', 'uglify', 'concat', 'htmlhint','sass','csslint','cssmin']);
   

};