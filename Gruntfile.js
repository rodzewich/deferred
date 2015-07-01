/*jslint */
/*global module */

module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),
        uglify: {
            options: {
                banner: grunt.file.read("src/banner.txt")
            },
            compile: {
                files: [
                    {
                        expand : false,
                        dest   : "index.js",
                        src    : "src/*.js"
                    }
                ]
            }
        }
    })

};