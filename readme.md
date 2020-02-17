# position-size
[![License][]](https://opensource.org/licenses/ISC)
[![NPM Package][]](https://npmjs.org/package/position-size)
[![Build status][]](https://travis-ci.org/strong-roots-capital/position-size)
[![Code Coverage][]](https://codecov.io/gh/strong-roots-capital/position-size)
[![Dependencies][]](https://david-dm.org/strong-roots-capital/position-size)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[NPM Package]: https://img.shields.io/npm/v/position-size.svg
[Build status]: https://travis-ci.org/strong-roots-capital/position-size.svg?branch=master
[Code Coverage]: https://codecov.io/gh/strong-roots-capital/position-size/branch/master/graph/badge.svg
[Dependencies]: https://david-dm.org/strong-roots-capital/position-size/status.svg

> Calculate position-size given risk tolerance and distance to stop-loss

## Install

```shell
npm install position-size
```

## Use

▸ **positionSize**(`capital`: number, `riskAsPercentOfCapital`: number, `percentDistanceToStopLoss`: number): *Either‹string, number›*

*Defined in [src/position-size.ts:39](https://github.com/strong-roots-capital/position-size/blob/0bbd628/src/position-size.ts#L39)*

Calculate position-size given risk-tolerance and distance to
stop-loss.

**Parameters:**

Name | Type |
------ | ------ |
`capital` | number |
`riskAsPercentOfCapital` | number |
`percentDistanceToStopLoss` | number |

**Returns:** *Either‹string, number›*

```typescript
import { positionSize } from 'position-size'

positionSize(1000, 1, 2.6)
//=> Right(384.6153846153846

positionSize(1000, 150, 2.6)
//=> Left('Risk cannot exceed 100 percent')
```

## Documentation

See [generated documentation](doc/README.md).

## Related

- [position-size-calculator](https://github.com/strong-roots-capital/position-size-calculator)
