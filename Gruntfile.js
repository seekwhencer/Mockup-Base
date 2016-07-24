/*

Matthias Kallenbach
Summer 2016

matthias.kallenbach@vgmail.com

*/

module.exports = function(grunt) {
    
    grunt.initConfig({
        
        /**
         * 
         */
        
        less: {
            production: {
                options: {
                    cleancss: true
                },
                files: {
                   'build/css/vld_main.min.css' : 'src/css/theme/theme.less'
                }
            },
            development: {
                options: {
                    paths: ['src/css/theme/']
                },
                files: {
                    'build/css/vld_main.css' : 'src/css/theme/theme.less'
                }
            }
        },
        
        lesslint : {
            build : {
                src : ['build/css/**.css', '!**/*.min.*'],
                options: {
                    csslint : {
                        'known-properties': false,
                        csslintrc: '.csslintrc'
                    },
                    failOnError: false,
                }
            }
        },
        
        /**
         *
         */
        bowercopy : {
            options : {
                srcPrefix : 'bower_components'
            },

            scripts : {
                options : {
                    destPrefix : 'build/js/assets'
                },
                files : {
                    'jquery/jquery.js' : 'jquery/dist/jquery.js',
                    'jquery/jquery.min.js' : 'jquery/dist/jquery.min.js',
                    'bootstrap/bootstrap.js' : 'bootstrap/dist/js/bootstrap.js',
                    'bootstrap/bootstrap.min.js' : 'bootstrap/dist/js/bootstrap.min.js'
                }
            },

            fonts : {
                options : {
                    destPrefix : 'build/css'
                },
                files : {
                    'fonts' : 'fontawesome/fonts/**/*',
                }
            },

            styles : {
                options : {
                    destPrefix : 'build/css/assets'
                },
                files : {
                    'font-awesome.min.css' : 'fontawesome/css/font-awesome.min.css',
                    'font-awesome.css' : 'fontawesome/css/font-awesome.css',
                    'bootstrap.min.css' : 'bootstrap/dist/css/bootstrap.min.css',
                    'bootstrap.css' : 'bootstrap/dist/css/bootstrap.css',
                    'flex-grid.css' : 'flex-grid/dist/flex-grid.css',
                    'flex-grid.min.css' : 'flex-grid/dist/flex-grid.min.css'
                }
            },

        },

        /**
         *
         */
        googlefonts : {
            build : {
                options : {
                    fontPath : 'build/css/fonts/',
                    httpPath : 'fonts/',
                    cssFile : 'build/css/vld_fonts.css',
                    fonts : [{
                        family : 'Roboto',
                        styles : [400, 500, 700, 900]
                    }]
                }
            }
        },

        /**
         * by file type
         * if nothing happend on changing a file,
         * check the filetype and add these one here
         */
        watch : {

            lesslint : {
                files : ['src/css/**/*.less'],
                tasks : ['less', 'lesslint', 'sync'],
                options : {
                    spawn : false,
                }
            },
            
            js : {
                files : ['src/js/**/*.js'],
                tasks : ['sync'], // add js lint here
                options : {
                    spawn : false,
                }
            },
            
            php : {
                files : ['src/source/**/*.php'],
                tasks : ['sync'], // add php lint here
                options : {
                    spawn : false,
                }
            },
            
            templates : {
                files : ['src/source/**/*.phtml'],
                tasks : ['sync'], // add html lint here
                options : {
                    spawn : false,
                }
            },

        },

        sync : {
            /*
             * Both called on every watch
             */
            build : {
                files : [{
                    expand : true,
                    cwd : 'src/',
                    src : ['**', '!**/*.less', '!.htaccess','!**/css/theme'],
                    dest : 'build/'
                }],
                updateAndDelete : false
            },

            /**
             *
             */
            htdocs : {
                files : [{
                    expand : true,
                    cwd : 'build/',
                    src : ['**', '!.htaccess','!**/css/theme'],
                    dest : 'htdocs/'
                }],
                updateAndDelete : true,
                ignoreInDest : ['.htaccess'],
            },
        },
        
        /**
         * combine css
         */
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                  'build/css/combined.min.css': ['**/build/css/**/*.css', '!**/build/css/**/*.min.css','!build/css/assets/flex-grid.css']
                }
            }
        },
        
        /**
         * combine javascript
         */
        uglify: { 
            options: {
                mangle: false
            },
            taget: {
                files: {
                    'build/js/combined.min.js':['build/js/**/*.js','!build/js/**/*.min.js','!build/js/assets/jquery/jquery.js']
                }
            }
        },

        
        /**
         * delete css, javascript, phtml and php 
         */
        clean: {
          build: {
            src: [
                'build/css/**/*.css',
                'build/js/**/*.js',
                'build/source/**/*.phtml',
                'build/source/**/*.php',
                'htdocs/css/**/*.css',
                'htdocs/js/**/*.js',
                'htdocs/source/**/*.phtml',
                'htdocs/source/**/*.php'
            ]
          }
        }

    });
    
    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-lesslint');
    grunt.loadNpmTasks('grunt-google-fonts');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    
    /**
     * the unused default
     */
    grunt.registerTask('default', ['watch', 'less', 'lesslint', 'bowercopy', 'sync']);
    
    
    /**
     * first run or refresh and watch
     */
    grunt.registerTask('go', ['refresh', 'watch']);

    /**
     * Export the "build" folder in the "htdocs" folder
     *
     * call "grunt export"
     *
     * before downloading all dependencies
     * create the less css files
     * and sync the source with the "build" folder
     * after that, sync the "build" folder with the "htdocs" folder
     *
     */
    grunt.registerTask('export', [
        'googlefonts',
        'less',
        'lesslint',
        'bowercopy',
        'sync:build',
        'cssmin',
        'uglify',
        'sync:htdocs'
        ]
    );
    
    /**
     * clears css and js files
     */
    grunt.registerTask('flush', ['clean']);
    
    /**
     *  flush and export
     */
    grunt.registerTask('refresh', ['flush', 'export']);
    

};