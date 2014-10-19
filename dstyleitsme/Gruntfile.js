module.exports = function(grunt) {
  grunt.initConfig({
	  pkg: grunt.file.readJSON('package.json'),
	  less: {
			dist: {
				files: {
					"style_less.css": ["less/style.less"]
				}
			}
		},
	    watch: {
			less:{
				files: ['less/*.less'],
				tasks: ['less','cssmin']
			}
		},
		cssmin: {
			combine: {
			    files: {
			      'style.css': ['font.css','style_less.css']
			    }
			  },
			dist: {
				expand: true,
				src: ['style.css'],
				ext: '.min.css'
			}
		}, 
  });
  
  /*
	 * 작업에 필요한 모듈 로드하기 grunt.loadNpmTasks('grunt-ANY-PLUGIN');
	 */ 
	for (var key in grunt.file.readJSON("package.json").devDependencies) {
		if (key !== "grunt" && key.indexOf("grunt") === 0) grunt.loadNpmTasks(key);
	}
 
  grunt.registerTask('default', ['watch']);
  
};