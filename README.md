# Useless Math Package

I mean.. Do you really need this soon to be multi mathemetically functioning package? (if that even makes sense)

# Installation

```bash
npm i @yetnt/ump
sudo npm install @yetnt/ump
yarn add @yetnt/ump
```

> _It's suggested you don't install from github itself as I'm consistently commiting to the project you'll need to update everyday and because some code breaks because i'm editing it so just get it from npm :+1:_

```js
const Ump = require("@yetnt/ump");
Ump.primeFactorize();
```

or

```js
const { primeFactorize } = require("@yetnt/ump");
primeFactorize();
```

# Features

## `primeFactorize`

Prime Factorization

### Parameters

-   `num`: The number to be factorized

```js
const { primeFactorize } = require("@yetnt/ump");

primeFactorize(50); // [2, 5, 5]
primeFactorize(5000); // [2, 2, 2, 5, 5, 5, 5]
primeFactorize(93928893); // [3, 17, 103, 17881]
primeFactorize(3); // [3]
```

## Ratio(s)

### `dinRatio`

Divide `x` in the ratio of `y`:`z`

#### Parameters

-   `x`: Dividend
-   `y`: The ratio value for y
-   `z`: The ratio value for z
-   `round`**(optional)**: Round off to 2 decimal places

```js
const { dinRatio } = require("@yetnt/ump");

dinRatio(500, 3, 2); // [300, 200]
dinRatio(456.93, 12, 5); // [ 322.5388235294118, 134.39117647058825 ]
dinRatio(456.93, 12, 5, true); // ['322.54', '134.39']
```

### `propRatio`

Direct Proportion (equivalent ratios)
Calculates the proportional value of `x`, `y`, and `z` in a ratio.

#### Parameters

-   `x`: The x value in the ratio
-   `y`: The y value in the ratio
-   `z`: The z value in the ratio
-   `which`**(optional)**: Switch unknown value and z

```js
const { propRatio } = require("@yetnt/ump");

propRatio(2, 4, 6, true); // 12
/* 
x : y
z : ?

in this case:
2 : 4
6 : ?
*/

propRatio(2, 6, 12); // 4
/*
x : y
? : z

in this case
2 : 6
? : 12
*/
```

## Conversion

### Parameters

The parameters stay the same for every function.

-   `n`: The value to be converted
-   `from`: Current area unit -`to`: Area unit to convert to.

Each function comes with it's own enums for the area unit strings.

### Distance

```js
const { Convert, Distance } = require("@yetnt/ump");

Convert.distance(12, Distance.Millimeter, Distance.Centimeter); // 1.2
Convert.distance(1, Distance.Inch, Distance.Centimeter); // 2.54
Convert.distance(98, Distance.NauticalMile, Distance.Nanometer); // 1852000000000
```

### Area

```js
const { Convert, Area } = require("@yetnt/ump");

Convert.area(34, Area.SquareCentimetre, Area.SquareInch); // 5.27001054002108
Convert.area(34, "cm2", "inch2"); // 5.27001054002108
Convert.area(490, Area.Hectare, Area.SquareFoot); // 52743183.75079384
```

### Volume

```js
const { Convert, Volume } = require("@yetnt/ump");

Convert.volume(34, Volume.CubicCentimeter, Volume.CubicInch); // 2.0748027411805627
Convert.volume(34, "cm3", "inch3"); // 2.0748027411805627
Convert.volume(490, Volume.Quart, Volume.Liter); // 463.71297
```

### Temperature

```js
const { Convert } = require("@yetnt/ump");

Convert.temp(1, "K", "C"); // 1 Kelvin to Celsius = -272.15
Convert.temp(1, "Fahrenheit", "kelvin"); // 1 Fahrenheit to kelvin = 255.92777777777775
Convert.temp(1, "c", "f"); // 1 Celsius to Fahrenheit = 33.8
```

### Data

```js
const { Convert, Data } = require("@yetnt/ump");

Convert.data(15, Data.Kibibyte, Data.Tebibyte); // 1.396983862272e-8
Convert.data(20, Data.Gigabyte, Data.Kilobyte); // 20000000
Convert.data(1, Data.Terabyte, Data.Bit); //8000000000000
```

## Pattterns

The functions stay mostly the same for all the pattern stuff, just with different parameters depending on the pattern.

### Linear Patterns

#### `findNthTerm`

-   `num1`: The first number in the sequence
-   `num2`: The second number in the sequence
-   `num3`: The third number in the sequence
-   `returnSimplified`**(optional)**: Return the simplified formula of **Tn = dn+c** rather than **Tn = a + (n - 1) \* d**

#### `findTerm`

Find the a term in the sequence.

-   `n`: The term position in the sequence
-   `d`: The difference
-   `a`: First number in sequence. The formula for this is **Tn = a + (n - 1) \* d**. If you prefer to use **Tn = dn+c**, then `a` is `c`

```js
const { LinearPattern } = require("@yetnt/ump");

let nthTerm = LinearPattern.findNthTerm(10, 20, 30);
console.log(nthTerm); // { a: 10, d: 10, formula: '10 + (n - 1) * 10' }
LinearPattern.findTerm(90, nthTerm.d, nthTerm.a);

// USING SIMPLIFIED FORMULA

let nthTerm = LinearPattern.findNthTerm(10, 20, 30, true);
console.log(nthTerm); // { c: 10, d: 10, formula: '10 + (n - 1) * 10' }
LinearPattern.findTerm(90, nthTerm.d, nthTerm.c);
```

#### `findTerms`

Returns an array of the pattern starting at term `n` and ending at term `nn`

-   `n`: The term to start at
-   `nn`: The term to end at
-   `d`: The difference
-   `a`: First number in sequence. The formula for this is **Tn = a + (n - 1) \* d**. If you prefer to use **Tn = dn+c**, then `a` is `c`

```js
const { LinearPattern } = require("@yetnt/umo");

const a = LinearPattern.findTerms(1, 10, 1, 1);
console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### Geometric Patterns

#### `findNthTerm`

-   `num1`: The first number in the sequence
-   `num2`: The second number in the sequence
-   `num3`: The third number in the sequence

#### `findTerm`

Find a term in the sequence

-   `n`: The term number
-   `a`: The first term
-   `r`: The constant ratio

```js
const { GeometricPattern } = require("@yetnt/ump");

let nthTerm = GeometricPattern.findNthTerm(2, 4, 8);
console.log(nthTerm); // { a: 2, r: 2, formula: '2 * 2^(n - 1)' }

GeometricPattern.findTerm(20, nthTerm.a, nthTerm.r); // 1048576
```

#### `findTerms`

Returns an array of the pattern starting at term `n` and ending at term `nn`

-   `n`: The term to start at
-   `nn`: The term to end at
-   `a`: The first term
-   `r`: Constant Ratio

```js
const { GeometricPattern } = require("@yetnt/ump");

const a = GeometricPattern.findTerms(1, 10, 1, 2);
console.log(a); // [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
```

### Quadratic Patterns

#### `findNthTerm`

-   `num1`: The first number in the sequence
-   `num2`: The second number in the sequence
-   `num3`: The third number in the sequence

#### `findTerm`

Find a term in the sequence

-   `n`: The term number
-   `a`: Quadratic coefficient (_`a`n² + bn + c_)
-   `b`: Linear coefficient (_an² + `b`n + c_)
-   `c`: Constant term / y-intercept (_an² + bn + `c`_)

```js
const { QuadraticPattern } = require("@yetnt/ump");

let nthTerm = QuadraticPattern.findNthTerm(139, 184, 235);
console.log(nthTerm); // { a: 3, b: 36, c: 100, formula: '(3n^2) + (36n) + 100' }

QuadraticPattern.findTerm(20, nthTerm.a, nthTerm.b, nthTerm.c); // 2020
```

#### `findTerms`

Returns an array of the pattern starting at term `n` and ending at term `nn`

-   `n`: The term to start at
-   `nn`: The term to end at
-   `a`: Quadratic coefficient (_`a`n² + bn + c_)
-   `b`: Linear coefficient (_an² + `b`n + c_)
-   `c`: Constant term / y-intercept (_an² + bn + `c`_)

```js
const { QuadraticPattern } = require("@yetnt/ump");

const a = QuadraticPattern.findTerms(1, 10, 1, 2, 7);
console.log(a); // [10, 15, 22, 31, 42, 55, 70, 87, 106, 127]
```

## `gcd`

Greatest Common Divisor (Highest Common Factor)

### Parameters

-   `a`: 1dt number
-   `b`: 2nd number

```js
const { gcd } = require("@yetnt/ump");

gcd(56, 24); // 8
```

## Statistics

### Parameters

These all take in an array of numbers.

-   `arr`: Array of numbers.

### Mean

Average

```js
const { Stats } = require("@yetnt/ump");

Stats.mean([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // 3.9
```

### Median

Middle number

```js
const { Stats } = require("@yetnt/ump");

Stats.median([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); //2.5
```

### Mode

Number that occurs the most

```js
const { Stats } = require("@yetnt/ump");

Stats.mode([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // [ 1 ]
```

### Range

Max - Min

```js
const { Stats } = require("@yetnt/ump");

Stats.range([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // 7
```

### Sum

Sum of all the numbers.

```js
const { Stats } = require("@yetnt/ump");

Stats.sum([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // 39
```

# Releases

[Github](https://github.com/Yetity/ump/releases) \
**[Latest](https://github.com/Yetity/ump/releases/latest)**

# Links

-   [Github](https://github.com/Yetity/ump)
-   [NPM](https://npmjs.com/package/@yetnt/ump)

# Contributors

## Main/Owner/Creator of package

-   YetNT
    -   [Discord](https://discordapp.com/users/671549251024584725)
    -   [Github](https://github.com/Yetity)
    -   [NPM](https://npmjs.com/~yetnt)

## others

-   202291
    -   _Improved PrimeFactorize, by removing feature that does not work._
    -   _Removed Imperal V Metric terms in favour of Enums_

![UMP](./ump-banner.png)
