<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# saxpy

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a vector `x` by a constant `alpha` and add the result to `y`.



<section class="usage">

## Usage

```javascript
import saxpy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-saxpy@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/blas-base-saxpy/tags). For example,

```javascript
import saxpy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-saxpy@v0.0.7-esm/index.mjs';
```

#### saxpy( N, alpha, x, strideX, y, strideY )

Multiplies a vector `x` by a constant `alpha` and adds the result to `y`.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = 5.0;

saxpy( x.length, alpha, x, 1, y, 1 );
// y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: `numeric` constant.
-   **x**: input [`Float32Array`][mdn-float32array].
-   **strideX**: index increment for `x`.
-   **y**: input [`Float32Array`][mdn-float32array].
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to multiply every other value in `x` by `alpha` and add the result to the first `N` elements of `y` in reverse order,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );

var alpha = 5.0;
var N = floor( x.length / 2 );

saxpy( N, alpha, x, 2, y, -1 );
// y => <Float32Array>[ 26.0, 16.0, 6.0, 1.0, 1.0, 1.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

// Initial arrays...
var x0 = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

var N = floor( x0.length / 2 );

saxpy( N, 5.0, x1, -2, y1, 1 );
// y0 => <Float32Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

#### saxpy.ndarray( N, alpha, x, strideX, offsetX, y, strideY, offsetY )

Multiplies a vector `x` by a constant `alpha` and adds the result to `y` using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
var y = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );
var alpha = 5.0;

saxpy.ndarray( x.length, alpha, x, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 6.0, 11.0, 16.0, 21.0, 26.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to multiply every other value in `x` by a constant `alpha` starting from the second value and add to the last `N` elements in `y` where `x[i] -> y[n]`, `x[i+2] -> y[n-1]`,...,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs';

var x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y = new Float32Array( [ 7.0, 8.0, 9.0, 10.0, 11.0, 12.0 ] );

var alpha = 5.0;
var N = floor( x.length / 2 );

saxpy.ndarray( N, alpha, x, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 7.0, 8.0, 9.0, 40.0, 31.0, 22.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0` or `alpha == 0`, both functions return `y` unchanged.
-   `saxpy()` corresponds to the [BLAS][blas] level 1 function [`saxpy`][saxpy].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';
import saxpy from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-saxpy@esm/index.mjs';

var x;
var y;
var i;

x = new Float32Array( 10 );
y = new Float32Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = round( randu()*100.0 );
    y[ i ] = round( randu()*10.0 );
}
console.log( x );
console.log( y );

saxpy.ndarray( x.length, 5.0, x, 1, 0, y, -1, y.length-1 );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas/base/daxpy`][@stdlib/blas/base/daxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector x by a constant and add the result to y.</span>
-   <span class="package-name">[`@stdlib/blas/base/gaxpy`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply x by a constant and add the result to y.</span>

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

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-saxpy.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-saxpy

[test-image]: https://github.com/stdlib-js/blas-base-saxpy/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/blas-base-saxpy/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-saxpy/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-saxpy?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-saxpy.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-saxpy/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-saxpy/tree/deno
[umd-url]: https://github.com/stdlib-js/blas-base-saxpy/tree/umd
[esm-url]: https://github.com/stdlib-js/blas-base-saxpy/tree/esm
[branches-url]: https://github.com/stdlib-js/blas-base-saxpy/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-saxpy/main/LICENSE

[blas]: http://www.netlib.org/blas

[saxpy]: http://www.netlib.org/lapack/explore-html/df/d28/group__single__blas__level1.html

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

<!-- <related-links> -->

[@stdlib/blas/base/daxpy]: https://github.com/stdlib-js/blas-base-daxpy/tree/esm

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->
