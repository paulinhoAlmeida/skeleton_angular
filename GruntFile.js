module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),

		dirs : grunt.file.readJSON('libraries.json'),

		closurecompiler: {
			jsLibs: {
				files: {
					// Destination: Sources...
					'<%= pkg.production_dirs.dest %>/js/libs.min.closure.js' : '<%= dirs.jsLibs %>'
					},
				options: {
					compilation_level: 'SIMPLE_OPTIMIZATIONS',
					language_in: 'ECMASCRIPT5_STRICT'
				}
			}
		},

		concat : {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */',
			},
			mainCss : {
				src : '<%= dirs.cssLibs %>',
				dest : '<%= pkg.production_dirs.dest %>css/minimum.all.css'
			},
			mainJs : {
				src : '<%= dirs.jsLibs %>',
				dest : '<%= pkg.production_dirs.dest %>js/libs.min.js'
			}
		},

		copy: {
			html: {
				files: [
					{
						expand: true,
						cwd: '<%= pkg.production_dirs.src %>',
						src: ['**/*.html'],
						dest: '<%= pkg.production_dirs.dest %>'
					}
				]
			},
			images: {
				files: [
					{
						expand: true,
						cwd: '<%= pkg.production_dirs.src %>img/',
						src: ['**/*'],
						dest: '<%= pkg.production_dirs.dest %>img'
					}
				]
			},
			fonts: {
				files: [
					{
						expand: true,
						cwd: '<%= pkg.production_dirs.src %>font/',
						src: ['**/*'],
						dest: '<%= pkg.production_dirs.dest %>font'
					}
				]
			},
			js: {
				files: [
					{
						expand: true,
						cwd: '<%= pkg.production_dirs.src %>js/',
						src: ['**/*'],
						dest: '<%= pkg.production_dirs.dest %>js'
					}
				]
			},
			lib: {
				files: [
					{
						expand: true,
						cwd: '<%= pkg.production_dirs.src %>lib/',
						src: ['**/*'],
						dest: '<%= pkg.production_dirs.dest %>lib'
					}
				]
			}
		},

		htmlmin: {
			mainHtml: {// Target
				options: {// Target options
				removeComments: false,
				collapseWhitespace: true
				},
				files:[
					{
						expand: true,
						cwd: '<%= pkg.production_dirs.dest %>',
						src: ['**/*.html'],
						dest: '<%= pkg.production_dirs.dest %>'
					}
				]
			}
		},


		replacer: {
			index: {// PRE ENV
				options: {
					replace: {
						'<link rel="stylesheet" href="css/bootplus.min.css">':'<link rel="stylesheet" href="css/minimum.all.css?key=<%= pkg.version %>@<%= new Date().getTime() %>-techGrind">',
						'<link rel="stylesheet" href="css/bootplus-responsive.min.css">':'',
						'<link rel="stylesheet" href="css/font-awesome.min.css">':'',
						'<link rel="stylesheet" href="css/app.css">':'',
						'<link rel="stylesheet" href="css/content.css">':'',
						'<link rel="stylesheet" href="css/fullcalendar.css">':'',
						'<script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>' : '<script src="js/libs.min.js"></script>',
						'<script src="js/bootstrap.min.js"></script>' : '',
						'<script src="lib/jquery/fullcalendar.js"></script>' : '',
						'<script src="lib/jquery/gcal.js"></script>' : '',
						'<script src="lib/angular/angular.js"></script>' : '',
						'<script src="lib/angular/ui-bootstrap-tpls-0.4.0.js"></script>' : '',
						'<script src="lib/angular/localStorageModule.js"></script>' : '',
						'<script src="js/app.js"></script>' : '',
						'<script src="js/services.js"></script>' : '',
						'<script src="js/controllers.js"></script>' : '',
						'<script src="js/filters.js"></script>' : '',
						'<script src="js/directives.js"></script>' : '',
						'<script src="js/startupgenome.js"></script>' : '',
						'<script src="js/s-expr-log.js"></script>' : ''
					}
				},
				files: [
					{src: ['<%= pkg.production_dirs.dest %>index.html'], dest: '<%= pkg.production_dirs.dest %>index.html'}
				]
			}
		},

		svgmin: {
			img: {// Target
				files:[{// Dictionary of files
						expand : true, // Enable dynamic expansion.
						cwd : '<%= pkg.production_dirs.dest %>img', // Src matches are relative to this path.
						src : ['**/*.svg'], // Actual pattern(s) to match.
						dest : '<%= pkg.production_dirs.dest %>img/', // Destination path prefix.
						ext : '.svg' // Dest filepaths will have this extension.
					}]
			},
			fonts: {// Target
				files:[{// Dictionary of files
						expand : true, // Enable dynamic expansion.
						cwd : '<%= pkg.production_dirs.dest %>font', // Src matches are relative to this path.
						src : ['**/*.svg'], // Actual pattern(s) to match.
						dest : '<%= pkg.production_dirs.dest %>font/', // Destination path prefix.
						ext : '.svg' // Dest filepaths will have this extension.
					}]
			}
		},


		coffee: { 
			mainCoffee: { 
				files: {// compile and concat into single file
					'<%= pkg.production_dirs.src %>js/coffee_result.js':[
																		'<%= pkg.production_dirs.coffee_src %>js/app.coffee',
																		'<%= pkg.production_dirs.coffee_src %>js/services.coffee',
																		'<%= pkg.production_dirs.coffee_src %>js/controllers.coffee',
																		'<%= pkg.production_dirs.coffee_src %>js/filters.coffee',
																		'<%= pkg.production_dirs.coffee_src %>js/directives.coffee',
																		'<%= pkg.production_dirs.coffee_src %>js/startupgenome.coffee'
																		]
				}
			}
		}




	});



	// Load the plugin that provides the "concat" task.
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Load the plugin that provides the "closure compiler" task.
	grunt.loadNpmTasks('grunt-closurecompiler');

	// Load the plugin that provides the "copy files and folders" task.
	grunt.loadNpmTasks('grunt-contrib-copy');

	// Load the plugin that provides the "footprint files" task.
	grunt.loadNpmTasks('grunt-replacer');

	// Load the plugin that provides the "minifyes the html files" task.
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	// Load the plugin that provides the "minifyes the html files" task.
	grunt.loadNpmTasks('grunt-svgmin');

	// Load the plugin that will minify the css
	grunt.loadNpmTasks('grunt-css');

	// Load the plugin to compile coffeescript
	grunt.loadNpmTasks('grunt-contrib-coffee');

	// TASK REGISTERS
	grunt.registerTask('deployProduction', ['copy:html', 'htmlmin:mainHtml', 'coffee:mainCoffee','closurecompiler:jsLibs', 'copy:images', 'svgmin:img','svgmin:fonts', 'copy:fonts', 'concat:mainCss', 'concat:mainJs', 'replacer:index']);

	grunt.registerTask('default', function(arg) {
		grunt.log.subhead('.....:::::Options Deploy:::::.....');
		grunt.log.writeln('grunt deployProduction');
	});
}; 