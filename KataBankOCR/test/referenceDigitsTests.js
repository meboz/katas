var refs = require('../lib/referenceDigits.js');

describe('Reference digits',function(){
	it('should have 9 items in the digits', function(){
		refs.digits().length.should.equal(9);
	});
	
	it('should have a flattened 1',function(){
		refs.digits()[0].should.equal('     |  |');
	});	
	
	it('should have a flattened 2',function(){
		refs.digits()[1].should.equal(' _  _||_ ');
	}); 
	
	it('should have a flattened 3',function(){
		refs.digits()[2].should.equal(' _  _| _|');
	}); 
	
	it('should have a flattened 4',function(){
		refs.digits()[3].should.equal('   |_|  |');
	}); 
	
	it('should have a flattened 5',function(){
		refs.digits()[4].should.equal(' _ |_  _|');
	}); 
	
	it('should have a flattened 6',function(){
		refs.digits()[5].should.equal(' _ |_ |_|');
	}); 
	
	it('should have a flattened 7',function(){
		refs.digits()[6].should.equal(' _   |  |');
	}); 
	
	it('should have a flattened 8',function(){
		refs.digits()[7].should.equal(' _ |_||_|');
	}); 
	
	it('should have a flattened 9',function(){
		refs.digits()[8].should.equal(' _ |_| _|');
	}); 	
});
