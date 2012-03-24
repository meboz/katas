

var number = [];
number[0] = '    _  _     _  _  _  _  _ ';
number[1] = '  | _| _||_||_ |_   ||_||_|';
number[2] = '  ||_  _|  | _||_|  ||_| _|';

exports.digits = function(){
	var flattenedDigits = [];
	
	flattenedDigits[0] ='     |  |';
	flattenedDigits[1] =' _  _||_ '; 
	flattenedDigits[2] =' _  _| _|'; 
	flattenedDigits[3] ='   |_|  |';
	flattenedDigits[4] =' _ |_  _|'; 
	flattenedDigits[5] =' _ |_ |_|'; 
	flattenedDigits[6] =' _   |  |'; 
	flattenedDigits[7] =' _ |_||_|'; 
	flattenedDigits[8] =' _ |_| _|';  

	return flattenedDigits;
};
