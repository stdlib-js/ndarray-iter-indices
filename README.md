<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# nditerIndices

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which returns indices for use indexing into an [`ndarray`][@stdlib/ndarray/ctor] having a specified shape.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import nditerIndices from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter-indices@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/ndarray-iter-indices/tags). For example,

```javascript
import nditerIndices from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter-indices@v0.2.0-esm/index.mjs';
```

#### nditerIndices( shape\[, options] )

Returns an iterator which returns indices for use indexing into an [`ndarray`][@stdlib/ndarray/ctor] having a specified `shape`.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ] );
// returns <ndarray>

var iter = nditerIndices( x.shape );

var v = iter.next().value;
// returns [ 0, 0, 0 ]

v = iter.next().value;
// returns [ 0, 0, 1 ]

v = iter.next().value;
// returns [ 0, 1, 0 ]

// ...
```

The function accepts the following `options`:

-   **order**: index iteration order. By default, the returned [iterator][mdn-iterator-protocol] iterates over the last dimensions first, thus corresponding to iteration over contiguous data stored in row-major order. Must be either `'row-major'` or `'column-major'`.

By default, the iterator returns indices such that the last dimensions are iterated over first. To return indices according to a specified order, set the `order` option.

```javascript
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';

var x = array( [ [ [ 1, 2 ], [ 3, 4 ] ], [ [ 5, 6 ], [ 7, 8 ] ] ], {
    'order': 'row-major'
});
// returns <ndarray>

var iter = nditerIndices( x.shape, {
    'order': 'column-major'
});

var v = iter.next().value;
// returns [ 0, 0, 0 ]

v = iter.next().value;
// returns [ 1, 0, 0 ]

v = iter.next().value;
// returns [ 0, 1, 0 ]

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the [iterator][mdn-iterator-protocol] is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@esm/index.mjs';
import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@esm/index.mjs';
import nditerIndices from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-iter-indices@esm/index.mjs';

// Define an input array:
var x = array( zeroTo( 27 ), {
    'shape': [ 3, 3, 3 ]
});

// Create an iterator for generating indices:
var it = nditerIndices( x.shape );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( x.get.apply( x, v.value ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray-ctor`][@stdlib/ndarray/ctor]</span><span class="delimiter">: </span><span class="description">multidimensional array constructor.</span>
-   <span class="package-name">[`@stdlib/ndarray-iter/entries`][@stdlib/ndarray/iter/entries]</span><span class="delimiter">: </span><span class="description">create an iterator which returns \[index, value] pairs for each element in a provided ndarray.</span>
-   <span class="package-name">[`@stdlib/ndarray-iter/values`][@stdlib/ndarray/iter/values]</span><span class="delimiter">: </span><span class="description">create an iterator which returns individual elements from a provided ndarray.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-iter-indices.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-iter-indices

[test-image]: https://github.com/stdlib-js/ndarray-iter-indices/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/ndarray-iter-indices/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-iter-indices/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-iter-indices?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-iter-indices.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-iter-indices/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-iter-indices/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-iter-indices/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-iter-indices/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-iter-indices/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-iter-indices/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-iter-indices/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-iter-indices/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-iter-indices/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/esm

<!-- <related-links> -->

[@stdlib/ndarray/iter/entries]: https://github.com/stdlib-js/ndarray-iter-entries/tree/esm

[@stdlib/ndarray/iter/values]: https://github.com/stdlib-js/ndarray-iter-values/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
