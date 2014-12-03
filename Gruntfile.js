module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    require: 'susy'
                },
                files: {    // Where-to?
                    'css/style.css': 'sass/style.scss'
                }
            } 
        },
        autoprefixer: {
            options: {
                // Task-specific options go here.
                browsers: ['last 2 versions', 'ie 8', 'ie 9'],
            },
            styles: {
                // Target-specific file lists and/or options go here.
                src: 'css/style.css',
                dest: 'css/style.css',
            },
        },
        cssmin: {
            compress: {
                files: {    // Where-to?
                  'css/style.css': ['css/style.css']
                }
            }
        },
        watch: {
            styles: {
                files: '**/*.scss',
                // The following line determines what operations are run on "watch"
                tasks: ['sass', 'autoprefixer', 'cssmin'],
            }
        }

    });

    // 3. Where we tell Grunt we plan to use these plugins.
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'watch']);

};