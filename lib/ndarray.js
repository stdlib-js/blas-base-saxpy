/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var f32 = require( '@stdlib/number-float64-base-to-float32' );


// VARIABLES //

var M = 4;


// MAIN //

/**
* Multiplies a vector `x` by a constant and adds the result to `y`.
*
* @param {PositiveInteger} N - number of indexed elements
* @param {number} alpha - scalar
* @param {Float32Array} x - input array
* @param {integer} strideX - `x` stride length
* @param {NonNegativeInteger} offsetX - starting index for `x`
* @param {Float32Array} y - output array
* @param {integer} strideY - `y` stride length
* @param {NonNegativeInteger} offsetY - starting index for `y`
* @returns {Float32Array} output array
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
* var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
* var alpha = 5.0;
*
* saxpy( x.length, alpha, x, 1, 0, y, 1, 0 );
* // y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
*/
function saxpy( N, alpha, x, strideX, offsetX, y, strideY, offsetY ) {
	var ix;
	var iy;
	var m;
	var i;
	if ( N <= 0 || alpha === 0.0 ) {
		return y;
	}
	ix = offsetX;
	iy = offsetY;

	// Use unrolled loops if both strides are equal to `1`...
	if ( strideX === 1 && strideY === 1 ) {
		m = N % M;

		// If we have a remainder, run a clean-up loop...
		if ( m > 0 ) {
			for ( i = 0; i < m; i++ ) {
				y[ iy ] += f32( alpha * x[ ix ] );
				ix += strideX;
				iy += strideY;
			}
		}
		if ( N < M ) {
			return y;
		}
		for ( i = m; i < N; i += M ) {
			y[ iy ] += f32( alpha * x[ ix ] );
			y[ iy+1 ] += f32( alpha * x[ ix+1 ] );
			y[ iy+2 ] += f32( alpha * x[ ix+2 ] );
			y[ iy+3 ] += f32( alpha * x[ ix+3 ] );
			ix += M;
			iy += M;
		}
		return y;
	}
	for ( i = 0; i < N; i++ ) {
		y[ iy ] += f32( alpha * x[ ix ] );
		ix += strideX;
		iy += strideY;
	}
	return y;
}


// EXPORTS //

module.exports = saxpy;
