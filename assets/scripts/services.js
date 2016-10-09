'use strict';

/*  Author: Rakesh Sharma 
 *  Date: Date.now()
 */

angular.module('app.service', [])

.service('$pdfStorage' , function() {
	this.pdfSaveButtons = [] ;
	this.pdfSaveContents = [] ;
})
.service('pdfSaveConfig' , function() {
	this.pdfName = "default.pdf";
})
