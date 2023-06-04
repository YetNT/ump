# Useless Math Package
I mean.. Do you really need this soon to be multi mathemetically functioning package? (if that even makes sense)

## Installation
```bash
npm i @yetnt/ump
```
> _It's suggested you don't install from github itself as I'm consistently commiting to the project you'll need to update everyday and because some code breaks because i'm editing it so just get it from npm :+1:_
```js
const Ump = require('@yetnt/ump')
Ump.PrimeFactorize()
```
or
```js
const { PrimeFactorize } = require('@yetnt/ump')
PrimeFactorize()
```

## Features
So far this package can do a lot

### Prime Factorization

```js
const { PrimeFactorize } = require('@yetnt/ump')

PrimeFactorize(50) // [2, 5, 5]
PrimeFactorize(5000) // [2, 2, 2, 5, 5, 5, 5]
PrimeFactorize(93928893) // [3, 17, 103, 17881]
PrimeFactorize(3) // [3]
```

### Ratio(s)

#### Divide `x` in the ratio of `y`:`z`
```js
const { DinRatio } = require('@yetnt/ump')

DinRatio(500, 3, 2) // [300, 200]
DinRatio(456.93, 12, 5) // [ 322.5388235294118, 134.39117647058825 ]
DinRatio(456.93, 12, 5, true) // ['322.54', '134.39']
```

#### Direct Proportion (equivalent ratios)
```js
const { PropRatio } = require('@yetnt/ump')

PropRatio(2, 4, 6, true) // 12
/* 
x : y
z : ?
*/

PropRatio(2, 6, 12) // 4
/*
x : y
? : z
*/
```

### Conversion
#### Pre-read
Usage of strings for the the shorthand units are soon to be depracated. Use the `Unit Enums` instead.
#### Distance

```js
const { ConvUnit, Distance } = require('@yetnt/ump')

ConvUnit("dist", 12, Distance.Millimeter, Distance.Centimeter) // 1.2
ConvUnit("dist", 1, Distance.Inch, Distance.Centimeter) // 2.54
ConvUnit("dist", 98, Distance.NauticalMile, Distance.Nanometer) // 1852000000000
```

#### Area

```js
const { ConvUnit, Area } = require('@yetnt/ump')

ConvUnit("area", 34, Area.SquareCentimetre, Area.SquareInch) // 5.27001054002108
ConvUnit("area", 34, "cm2", "inch2") // 5.27001054002108
ConvUnit("area", 490, Area.Hectare, Area.SquareFoot) // 52743183.75079384
```

#### Volume
```js
const { ConvUnit, Volume } = require('@yetnt/ump')

ConvUnit("vol", 34, Volume.CubicCentimeter, Volume.CubicInch) // 2.0748027411805627
ConvUnit("vol", 34, "cm3", "inch3") // 2.0748027411805627
ConvUnit("vol", 490, Volume.Quart, Volume.Liter) // 463.71297
```

[Distance/Area/Volume definitons](https://github.com/Yetity/ump/blob/main/src/libmath/convTable.json)

[Distance/Area/Volume aliases](https://github.com/Yetity/ump/blob/master/src/libmath/def/unit-ali.json)

## Releases
[Github](https://github.com/Yetity/ump/releases) \
**[Latest](https://github.com/Yetity/ump/releases/latest)**

> * **[4.0.0](https://github.com/Yetity/ump/releases/tag/v3.0.0)**
> * **[3.0.0](https://github.com/Yetity/ump/releases/tag/v3.0.0)**
> * **[2.0.0](https://github.com/Yetity/ump/releases/tag/v2.0.0)**
> * **[1.0.0](https://github.com/Yetity/ump/releases/tag/v1.0.0)**

## Links
* [Github](https://github.com/Yetity/ump)
* [NPM](https://npmjs.com/package/@yetnt/ump)

## Contributors
#### Main/Owner/Creator of package
* YetNT
	* [Discord](https://discordapp.com/users/671549251024584725)
	* [Github](https://github.com/Yetity)
	* [NPM](https://npmjs.com/~yetnt)
	* [Twitter](https://twitter.com/YetNT1)
	* [Replit](https://replit.com/@hlonipoole692)

#### others
* 202291
	* _Improved PrimeFactorize, by removing feature that does not work._
