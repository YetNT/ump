# Useless Math Package
I mean.. Do you really need this soon to be multi mathemetically functioning package? (if that even makes sense)

## Installation
```bash
npm i @yetnt/ump
```
> _It's suggested you don't install from github itself as I'm consistently commiting to the project you'll need to update everyday and because some code breaks because i'm editing it so just get it from npm :+1:_
```js
const Ump = require('@yetnt/ump')
```

## Features
So far this package can do a lot

### Prime Factorization

```js
const Ump = require('@yetnt/ump')

Ump.PrimeFactorize(50) // [2, 5, 5]
Ump.PrimeFactorize(5000) // [2, 2, 2, 5, 5, 5, 5]
Ump.PrimeFactorize(93928893) // [3, 17, 103, 17881]
Ump.PrimeFactorize(3) // [3]
```

### Ratio(s)

#### Divide `x` in the ratio of `y`:`z`
```js
const Ump = require('@yetnt/ump')

Ump.DinRatio(500, 3, 2) // [300, 200]
Ump.DinRatio(456.93, 12, 5) // [ 322.5388235294118, 134.39117647058825 ]
Ump.DinRatio(456.93, 12, 5, true) // ['322.56', '134.4']
```

#### Direct Proportion (equivalent ratios)
```js
const Ump = require('@yetnt/ump')

Ump.PropRatio(2, 4, 6, true) // 12
/* 
x : y
z : ?
*/

Ump.PropRatio(2, 6, 12) // 4
/*
x : y
? : z
*/
```

### Conversion
#### Distance

```js
const Ump = require('@yetnt/ump')

Ump.ConvUnit("dist", 12, "millimetre", "centimetre") // 1.2
Ump.ConvUnit("dist", 1, "inch", "cm") // 2.54
Ump.convUnit("dist", 98, "nautical-mile", "nanometre") // 1852000000000
```

#### Area

```js
const Ump = require('@yetnt/ump')

Ump.ConvUnit("area", 34, "square-centimetre", "square-inch") // 5.27001054002108
Ump.ConvUnit("area", 34, "cm2", "inch2") // 5.27001054002108
Ump.ConvUnit("area", 490, "hectare", "ft2") // 52743183.75079384
```

#### Volume
```js
const Ump = require('@yetnt/ump')

Ump.ConvUnit("vol", 34, "cubic-centimetre", "cubic-inch") // 2.0748027411805627
Ump.ConvUnit("vol", 34, "cm3", "inch3") // 2.0748027411805627
Ump.ConvUnit("vol", 490, "quart", "litre") // 463.71297
```

[Distance/Area/Volume definitons](https://github.com/Yetity/ump/blob/main/src/libmath/convTable.json)

[Distance/Area/Volume aliases](https://github.com/Yetity/ump/blob/master/src/libmath/def/unit-ali.json)

## Releases
[Github](https://github.com/Yetity/ump/releases) \
**[Latest](https://github.com/Yetity/ump/releases/latest)**

> * **[3.0.0](https://github.com/Yetity/ump/releases/tag/v3.0.0)**
> * **[2.0.0](https://github.com/Yetity/ump/releases/tag/v2.0.0)**
> * **[1.0.0](https://github.com/Yetity/ump/releases/tag/v1.0.0)**

## Links
### Places you can find this package
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
