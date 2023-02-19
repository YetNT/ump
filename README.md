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
What can this do?

### Prime Factorization

```js
const Ump = require('@yetnt/ump')

Ump.PrimeFactorize(50) // [2, 5, 5]
Ump.PrimeFactorize(5000) // [2, 2, 2, 5, 5, 5, 5]
Ump.PrimeFactorize(93928893) // [3, 17, 103, 17881]
Ump.PrimeFactorize(3) // [3]
```

### Ratio(s)

Divide `x` in the ratio of `y`:`z`
```js
const Ump = require('@yetnt/ump')

Ump.DinRatio(500, 3, 2) // [300, 200]

// Also supports decimals! (NOTE : it will round off to 2 decimal places, since this feature will most likely be used for money)
Ump.DinRatio(456.93, 12, 5) // ['322.56', '134.4']
```

Direct Proportion
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

### Distance

```js
const Ump = require('@yetnt/ump')

Ump.ConvDist(12, "millimetre", "centimetre") // 2
Ump.ConvDist(1, "inch", "cm") // 2.54
Ump.convDist(98, "nautical-mile", "nanometre") // 1852000000000
```
[List of available distances and short hands.](https://github.com/Yetity/ump/blob/main/libmath/convTable.json)

## Releases
[Github](https://github.com/Yetity/ump/releases) \
**[Latest](https://github.com/Yetity/ump/releases/latest)**

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
