var mtfm = require('../lib/matrixUtilities.js')
var assert = require('assert');

describe('When flattening a matrix',function(){
	it('a 1x1 should remain the same',function(){
		var matrix = [4];
		
		var transformedMatrix = mtfm.flatten(matrix);
		
		transformedMatrix.length.should.equal(1);
		transformedMatrix[0].should.equal(4);  
		
	});
	
	it('a 1x2 should become a 1x2',function(){
		var matrix = [1,2];
		
		var transformed = mtfm.flatten(matrix);
		
		transformed.length.should.equal(2);
		transformed[0].should.equal(1);
		transformed[1].should.equal(2);
	})
});
