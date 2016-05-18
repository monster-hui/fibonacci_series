'use strict';

function fibonacci_series(n) {
	var fib=[];
	for(var i=0;i<n+1;i++){
		if(i<2)fib[i]=i;
		else{
			fib[i]=fib[i-2]+fib[i-1];
		}
	}
	return fib;
}

module.exports = fibonacci_series;
