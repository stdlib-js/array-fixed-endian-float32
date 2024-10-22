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

var Float32Array = require( '@stdlib/array-float32' );
var logEach = require( '@stdlib/console-log-each' );
var Float32ArrayFE = require( './../lib' );

// Create a typed array by specifying a length:
var out = new Float32ArrayFE( 'little-endian', 3 );
logEach( '%s', out );

// Create a typed array from an array:
var arr = [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ];
out = new Float32ArrayFE( 'big-endian', arr );
logEach( '%s', out );

// Create a typed array from an array buffer:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float32ArrayFE( 'little-endian', arr.buffer );
logEach( '%s', out );

// Create a typed array from an array buffer view:
arr = new Float32Array( [ 1.0, -1.0, -3.14, 3.14, 0.5, 0.5 ] ); // host byte order
out = new Float32ArrayFE( 'big-endian', arr.buffer, 8, 2 );
logEach( '%s', out );
