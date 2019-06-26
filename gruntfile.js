module.exports = function(grunt) {

    // Project configuration. 
    grunt.initConfig({
        pug: {
          compile: {
            options: {
              data: {
                debug: false
              }
            },
            files: {
              'index.html': 'pug/index.pug'
            }
          }
        },

        sass: {
          dist: {
            files: {
              'static/css/main.css' : 'sass/main.scss'
            }
          }
        },

        watch: {
            files: {
                files: ['**/*.pug', '**/*.scss'],
                tasks: ['pug', 'sass'],
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['pug', 'sass'] );
    grunt.registerTask('w', ['watch']);
};
