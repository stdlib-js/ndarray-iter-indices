/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var isPlainObject = require( '@stdlib/assert-is-plain-object' );
var isOrder = require( '@stdlib/ndarray-base-assert-is-order' );
var isCollection = require( '@stdlib/assert-is-collection' );
var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var iteratorSymbol = require( '@stdlib/symbol-iterator' );
var zeros = require( '@stdlib/array-base-zeros' );
var numel = require( '@stdlib/ndarray-base-numel' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Increments indices in row-major order.
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeIntegerArray} idx - current indices
* @returns {NonNegativeIntegerArray} updated indices
*/
function nextRowMajor( ndims, shape, idx ) {
	var i;
	var j;

	// Search for the first dimension in which we don't have to "carry the one"...
	for ( i = ndims-2; i >= 0; i-- ) {
		j = ( idx[ i ] + 1 ) % shape[ i ];
		idx[ i ] = j;

		// If the current index value is greater than zero, we can continue iterating within the current sub-array...
		if ( j > 0 ) {
			break;
		}
	}
	return idx;
}

/**
* Increments indices in column-major order.
*
* @private
* @param {NonNegativeInteger} ndims - number of dimensions
* @param {NonNegativeIntegerArray} shape - array shape
* @param {NonNegativeIntegerArray} idx - current indices
* @returns {NonNegativeIntegerArray} updated indices
*/
function nextColumnMajor( ndims, shape, idx ) {
	var i;
	var j;

	// Search for the first dimension in which we don't have to "carry the one"...
	for ( i = 1; i < ndims; i++ ) {
		j = ( idx[ i ] + 1 ) % shape[ i ];
		idx[ i ] = j;

		// If the current index value is greater than zero, we can continue iterating within the current sub-array...
		if ( j > 0 ) {
			break;
		}
	}
	return idx;
}


// MAIN //

/**
* Returns an iterator which returns indices for use in indexing into an ndarray having a specified shape.
*
* @param {NonNegativeIntegerArray} shape - input shape
* @param {Options} [options] - function options
* @param {boolean} [options.order='row-major'] - index iteration order
* @throws {TypeError} first argument must be an array containing nonnegative integers
* @throws {TypeError} options argument must be an object
* @throws {TypeError} must provide valid options
* @returns {Iterator} iterator
*
* @example
* var array = require( '@stdlib/ndarray-array' );
*
* var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
* // returns <ndarray>
*
* var iter = nditerIndices( x.shape );
*
* var v = iter.next().value;
* // returns [ 0, 0, 0 ]
*
* v = iter.next().value;
* // returns [ 0, 0, 1 ]
*
* v = iter.next().value;
* // returns [ 0, 1, 0 ]
*
* // ...
*/
function nditerIndices( shape ) {
	var options;
	var ndims;
	var opts;
	var iter;
	var FLG;
	var idx;
	var dim;
	var sh;
	var f;
	var S;
	var N;
	var i;

	if ( !isCollection( shape ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an array of nonnegative integers. Value: `%s`.', shape ) );
	}
	opts = {
		'order': 'row-major'
	};
	if ( arguments.length > 1 ) {
		options = arguments[ 1 ];
		if ( !isPlainObject( options ) ) {
			throw new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
		}
		if ( hasOwnProp( options, 'order' ) ) {
			if ( !isOrder( options.order ) ) {
				throw new TypeError( format( 'invalid option. `%s` option must be a recognized order. Option: `%s`.', 'order', options.order ) );
			}
			opts.order = options.order;
		}
	}
	// Retrieve the number of dimensions:
	ndims = shape.length;

	// Copy the input shape:
	sh = [];
	for ( i = 0; i < ndims; i++ ) {
		if ( !isNonNegativeInteger( shape[ i ] ) ) {
			throw new TypeError( format( 'invalid argument. First argument must be an array of nonnegative integers. Value: `%s`.', shape ) );
		}
		sh.push( shape[ i ] );
	}
	// Check whether the input array is empty...
	N = numel( sh );
	if ( N === 0 ) {
		FLG = true;
	}
	// Resolve the dimension in which indices iterate fastest:
	if ( opts.order === 'row-major' ) {
		dim = ndims - 1;
		f = nextRowMajor;
	} else {
		dim = 0;
		f = nextColumnMajor;
	}
	S = sh[ dim ];

	// Initialize a counter:
	i = -1;

	// Initialize an index array:
	idx = zeros( ndims );

	// Create an iterator protocol-compliant object:
	iter = {};
	setReadOnly( iter, 'next', next );
	setReadOnly( iter, 'return', end );

	// If an environment supports `Symbol.iterator`, make the iterator iterable:
	if ( iteratorSymbol ) {
		setReadOnly( iter, iteratorSymbol, factory );
	}
	return iter;

	/**
	* Returns an iterator protocol-compliant object containing the next iterated value.
	*
	* @private
	* @returns {Object} iterator protocol-compliant object
	*/
	function next() {
		var j;
		i += 1;
		if ( FLG || i >= N ) {
			return {
				'done': true
			};
		}
		if ( i > 0 ) {
			// Update the index array:
			j = ( idx[ dim ] + 1 ) % S;
			idx[ dim ] = j;
			if ( j === 0 ) {
				// If we've iterated over all the elements in the current dimension, move on to the next sub-array:
				f( ndims, sh, idx );
			}
		}
		// Return the next set of indices:
		return {
			'value': idx.slice(),
			'done': false
		};
	}

	/**
	* Finishes an iterator.
	*
	* @private
	* @param {*} [value] - value to return
	* @returns {Object} iterator protocol-compliant object
	*/
	function end( value ) {
		FLG = true;
		if ( arguments.length ) {
			return {
				'value': value,
				'done': true
			};
		}
		return {
			'done': true
		};
	}

	/**
	* Returns a new iterator.
	*
	* @private
	* @returns {Iterator} iterator
	*/
	function factory() {
		return nditerIndices( sh, opts );
	}
}


// EXPORTS //

module.exports = nditerIndices;
