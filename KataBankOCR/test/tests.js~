var fs = require('fs');
var path = require('path');
var refs = require('../lib/referenceDigits.js');

var ReferenceDigits = function(){
	var _lines = [];
	_lines[0] = '    _  _     _  _  _  _  _ ';
	_lines[1] = '  | _| _||_||_ |_   ||_||_|';
	_lines[2] = '  ||_  _|  | _||_|  ||_| _|'; 
	
	for(var i = 0;i < 9; i++){
		
	}
}

var Digit = function(lines){
	this.lines = lines || [];	 

	 
	
	
};

Digit.prototype = {
	
	getNumber: function(){

		if(this.char(3, 3) == ' ')
			return 2;	
		
		if(this.char(1,2) == ' '){
			if(this.char(2,1) == '|')
				return 4;
				
			return 1;
		}
		return 0;	
	},
	char: function(line, position){
		var char = this.lines[line-1][position - 1];
		return char;
	},
	toFlattened: function(){
		var flattened = '';
		
		for(var r = 0;r < this.lines.length;r++){
			var row = this.lines[r];
			for(var c = 0;c < row.length;c++){
				flattened += row[c];
			}
		}
		
		return flattened;
	}
}
var getLines = function(file, cb){
	fs.readFile(file,'UTF8', function (err, data) {
	  if (err) throw err;
	  cb(data.split('\n'));
	});
	
}

var getDigit = function(lines, digitPosition){
	var ary = [];
	for(var i = 0;i < lines.length; i++){
		ary[i] = lines[i].substring(digitPosition * 3,digitPosition * 3 + 3);
	}
	
	return ary;
}

describe('A file with a single account number', function(){
	var me = this;
	me.lines = [];

	beforeEach(function(done){
		getLines(path.join(__dirname,'singleAccountNumber'),function(lines){
			me.lines = lines;
			done();
		});
	});

	it('should contain 4 lines only', function(done){
		me.lines.length.should.equal(4); 
		done();
	});
	
	it('should contain 27 chars per line in the number', function(done){
		for(var i = 0; i < lines.length - 1; i++){ 
			lines[i].length.should.equal(27,'Line ' + i + ' chars not right');
		}	
		
		done();
	});
	
	it('should contain 0 chars on the spacer line', function(done){
		lines[3].length.should.equal(0);
		done();
	});
});

describe('Given a single account number as 3 lines of 27 characters', function(){
	var lines = [];
	lines[0] = '    _  _     _  _  _  _  _ ';
	lines[1] = '  | _| _||_||_ |_   ||_||_|';
	lines[2] = '  ||_  _|  | _||_|  ||_| _|';
	
	it('then the first digit should be able to be extracted', function(){
		var digit0 = getDigit(lines,0);
		
		digit0[0].should.equal('   ');
		digit0[1].should.equal('  |');
		digit0[2].should.equal('  |');
	});
	
	it('then the second digit should be able to be extracted', function(){
		var digit = getDigit(lines,1);
		
		digit[0].should.equal(' _ ');
		digit[1].should.equal(' _|');
		digit[2].should.equal('|_ ');
	});
	
	
});

describe('A digit', function(){
	var lines = [];
	lines[0] = '    _  _     _  _  _  _  _ ';
	lines[1] = '  | _| _||_||_ |_   ||_||_|';
	lines[2] = '  ||_  _|  | _||_|  ||_| _|';
	
	
	
	it('can determine if its a 1', function(){
		var digit1 = getDigit(lines,0);
		var digit = new Digit(digit1);
		digit.getNumber().should.equal(1);
	});
	
	it('can get a character at a position for a 1',function(){
		var digit1 = getDigit(lines,0);
		var digit = new Digit(digit1);
		digit.char(1,1).should.equal(' ');
		digit.char(2,3).should.equal('|');
	});
	
	it('can get a character at a position for a 2',function(){
		var digit1 = getDigit(lines,1);
		var digit = new Digit(digit1);
		digit.char(1,1).should.equal(' ');
		digit.char(1,2).should.equal('_');
		digit.char(3,3).should.equal(' ');
	});
	
	
	it('can determine if its a 2, a 2 is the only digit with a blank @ 3,3',function(){
		var digit1 = getDigit(lines,1);
		var digit = new Digit(digit1);
		digit.getNumber().should.equal(2);
	});
	
	it('can determine if its a 4, a 4 has no lid with a pipe @2,1',function(){
		var digit1 = getDigit(lines,3);
		var digit = new Digit(digit1);
		digit.getNumber().should.equal(4);
	});


});

