/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var ArrayBuffer = require( '@stdlib/array-buffer' );
var Float32Array = require( '@stdlib/array-float32' );
var isArrayBuffer = require( '@stdlib/assert-is-arraybuffer' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var ITERATOR_SYMBOL = require( '@stdlib/symbol-iterator' );
var pkg = require( './../package.json' ).name;
var Float32ArrayFE = require( './../lib' );


// VARIABLES //

var opts = {
	'skip': ( ITERATOR_SYMBOL === null )
};


// FUNCTIONS //

/**
* Returns an "iterable" object.
*
* @private
* @returns {Object} iterable object
*/
function createIterable() {
	var out = {};
	out[ ITERATOR_SYMBOL ] = iterator;
	return out;

	function iterator() {
		return {
			'next': next
		};
	}

	function next() {
		return {
			'done': true
		};
	}
}


// MAIN //

bench( pkg+'::instantiation,new:endianness=little-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,new:endianness=big-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new:endianness=little-endian', function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = Float32ArrayFE;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = ctor( 'little-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,no_new:endianness=big-endian', function benchmark( b ) {
	var ctor;
	var arr;
	var i;

	ctor = Float32ArrayFE;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = ctor( 'big-endian' );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,length:endianness=little-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,length:endianness=big-endian', function benchmark( b ) {
	var arr;
	var i;
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,typed_array:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float32Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,typed_array:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new Float32Array( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,array:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,array:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = [];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,iterable:endianness=little-endian', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,iterable:endianness=big-endian', opts, function benchmark( b ) {
	var arr;
	var i;

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', createIterable() );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 0 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', buf );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', buf, 8 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', buf, 8 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset,length:endianness=little-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'little-endian', buf, 8, 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::instantiation,arraybuffer,byte_offset,length:endianness=big-endian', function benchmark( b ) {
	var buf;
	var arr;
	var i;

	buf = new ArrayBuffer( 8 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = new Float32ArrayFE( 'big-endian', buf, 8, 0 );
		if ( arr.length !== 0 ) {
			b.fail( 'should have length 0' );
		}
	}
	b.toc();
	if ( !(arr instanceof Float32ArrayFE) ) {
		b.fail( 'should return an instance' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:buffer', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float32ArrayFE( 'little-endian' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.buffer;
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isArrayBuffer( v ) ) {
		b.fail( 'should return an ArrayBuffer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:byteLength', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float32ArrayFE( 'little-endian' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.byteLength;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:byteOffset', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float32ArrayFE( 'little-endian' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.byteOffset;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::get:length', function benchmark( b ) {
	var arr;
	var v;
	var i;

	arr = new Float32ArrayFE( 'little-endian' );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		// Note: the following may be optimized away due to loop invariant code motion and/or other compiler optimizations, rendering this benchmark meaningless...
		v = arr.length;
		if ( v !== v ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( !isNonNegativeInteger( v ) ) {
		b.fail( 'should return a nonnegative integer' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
