'use strict';
// wrapper function with grunt
module.exports = function(grunt){

	grunt.initConfig({
		jshint:{
			files: ['gruntfile.js', 'src/**/*.js'],
			option:{
				globals:{
					jQuery: true

				}

			}

		},
		watch:{
			files: ['<%= jshint.file %>'],
			tasks: ['jshint']

		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);

};