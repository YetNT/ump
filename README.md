# Useless Math Package

I mean.. Do you really need this soon to be multi mathemetically functioning package? (if that even makes sense)

## Installation

```bash
npm i @yetnt/ump
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

## Features

So far this package can do a lot

### Prime Factorization

```js
const { primeFactorize } = require("@yetnt/ump");

primeFactorize(50); // [2, 5, 5]
primeFactorize(5000); // [2, 2, 2, 5, 5, 5, 5]
primeFactorize(93928893); // [3, 17, 103, 17881]
primeFactorize(3); // [3]
```

### Ratio(s)

#### Divide `x` in the ratio of `y`:`z`

```js
const { dinRatio } = require("@yetnt/ump");

dinRatio(500, 3, 2); // [300, 200]
dinRatio(456.93, 12, 5); // [ 322.5388235294118, 134.39117647058825 ]
dinRatio(456.93, 12, 5, true); // ['322.54', '134.39']
```

#### Direct Proportion (equivalent ratios)

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

### Conversion

#### Distance

```js
const { Convert, Distance } = require("@yetnt/ump");

Convert.distance(12, Distance.Millimeter, Distance.Centimeter); // 1.2
Convert.distance(1, Distance.Inch, Distance.Centimeter); // 2.54
Convert.distance(98, Distance.NauticalMile, Distance.Nanometer); // 1852000000000
```

#### Area

```js
const { Convert, Area } = require("@yetnt/ump");

Convert.area(34, Area.SquareCentimetre, Area.SquareInch); // 5.27001054002108
Convert.area(34, "cm2", "inch2"); // 5.27001054002108
Convert.area(490, Area.Hectare, Area.SquareFoot); // 52743183.75079384
```

#### Volume

```js
const { Convert, Volume } = require("@yetnt/ump");

Convert.volume(34, Volume.CubicCentimeter, Volume.CubicInch); // 2.0748027411805627
Convert.volume(34, "cm3", "inch3"); // 2.0748027411805627
Convert.volume(490, Volume.Quart, Volume.Liter); // 463.71297
```

#### Temperature

```js
const { Convert } = require("@yetnt/ump");

Convert.temp(1, "K", "C"); // 1 Kelvin to Celsius = -272.15
Convert.temp(1, "Fahrenheit", "kelvin"); // 1 Fahrenheit to kelvin = 255.92777777777775
Convert.temp(1, "c", "f"); // 1 Celsius to Fahrenheit = 33.8
```

#### Data

```js
const { Convert, Data } = require("@yetnt/ump");

Convert.data(15, Data.Kibibyte, Data.Tebibyte); // 1.396983862272e-8
Convert.data(20, Data.Gigabyte, Data.Kilobyte); // 20000000
Convert.data(1, Data.Terabyte, Data.Bit); //8000000000000
```

### Pattterns

#### Linear Patterns

```js
const { LinearPattern } = require("@yetnt/ump");

LinearPattern.findN(10, 30, 50); // "10 + (n - 1) * 20"
LinearPattern.findTerm(3, 20, 10); // 50, (find the 3rd term in the sequence. 20 is the difference and 10 is the first number in the sequence)
```

#### Geometric Patterns

```js
const { GeometricPattern } = require("@yetnt/ump");

GeometricPattern.findN(1, 4, 16); // "1 * 4**(n - 1)"
GeometricPattern.findTerm(3, 1, 4); // 16, 3 is the term number, 1 is the first term and 4 is the constant ratio.
```

### Greatest Common Divisor (Highest Common Factor)

```js
const { gcd } = require("@yetnt/ump");

gcd(56, 24); // 8
```

### Statistics

## Mean

```js
const { Stats } = require("@yetnt/ump");

Stats.mean([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // 3.9
```

## Median

```js
const { Stats } = require("@yetnt/ump");

Stats.median([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); //2.5
```

## Mode

```js
const { Stats } = require("@yetnt/ump");

Stats.mode([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // [ 1 ]
```

## Range

```js
const { Stats } = require("@yetnt/ump");

Stats.range([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // 7
```

## Sum

```js
const { Stats } = require("@yetnt/ump");

Stats.sum([1, 1, 2, 6, 7, 8, 3, 5, 5, 1]); // 39
```

## Releases

[Github](https://github.com/Yetity/ump/releases) \
**[Latest](https://github.com/Yetity/ump/releases/latest)**

> -   **[5.0.0](https://github.com/Yetity/ump/releases/tag/v4.0.0)**
> -   **[4.0.0](https://github.com/Yetity/ump/releases/tag/v4.0.0)**
> -   **[3.0.0](https://github.com/Yetity/ump/releases/tag/v3.0.0)**
> -   **[2.0.0](https://github.com/Yetity/ump/releases/tag/v2.0.0)**
> -   **[1.0.0](https://github.com/Yetity/ump/releases/tag/v1.0.0)**

## Links

-   [Github](https://github.com/Yetity/ump)
-   [NPM](https://npmjs.com/package/@yetnt/ump)

## Contributors

#### Main/Owner/Creator of package

-   YetNT
    -   [Discord](https://discordapp.com/users/671549251024584725)
    -   [Github](https://github.com/Yetity)
    -   [NPM](https://npmjs.com/~yetnt)

#### others

-   202291
    -   _Improved PrimeFactorize, by removing feature that does not work._
    -   _Removed Imperal V Metric terms in favour of Enums_

![UMP](./ump-banner.png)
