[position-size](README.md)

# position-size

## Index

### Type aliases

* [Percent](README.md#percent)

### Variables

* [parseRisk](README.md#const-parserisk)
* [parseStopLoss](README.md#const-parsestoploss)

### Functions

* [parseIsNotNaN](README.md#parseisnotnan)
* [parsePercent](README.md#parsepercent)
* [positionSize](README.md#positionsize)
* [shouldCalculate](README.md#shouldcalculate)

## Type aliases

###  Percent

Ƭ **Percent**: *number*

*Defined in [src/position-size.ts:8](https://github.com/strong-roots-capital/position-size/blob/0bbd628/src/position-size.ts#L8)*

## Variables

### `Const` parseRisk

• **parseRisk**: *function* = parsePercent(`Risk`, 0, 100)

*Defined in [src/position-size.ts:32](https://github.com/strong-roots-capital/position-size/blob/0bbd628/src/position-size.ts#L32)*

#### Type declaration:

▸ (`value`: number): *Either‹string, [Percent](README.md#percent)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

___

### `Const` parseStopLoss

• **parseStopLoss**: *function* = parsePercent(`Stop-loss`, 0, Infinity)

*Defined in [src/position-size.ts:33](https://github.com/strong-roots-capital/position-size/blob/0bbd628/src/position-size.ts#L33)*

#### Type declaration:

▸ (`value`: number): *Either‹string, [Percent](README.md#percent)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

## Functions

###  parseIsNotNaN

▸ **parseIsNotNaN**(`tag`: string, `value`: number): *Either‹string, number›*

*Defined in [src/position-size.ts:10](https://github.com/strong-roots-capital/position-size/blob/0bbd628/src/position-size.ts#L10)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |
`value` | number |

**Returns:** *Either‹string, number›*

___

###  parsePercent

▸ **parsePercent**(`tag`: string, `lowerBoundInclusive`: number, `upperBoundExclusive`: number): *function*

*Defined in [src/position-size.ts:14](https://github.com/strong-roots-capital/position-size/blob/0bbd628/src/position-size.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`tag` | string |
`lowerBoundInclusive` | number |
`upperBoundExclusive` | number |

**Returns:** *function*

▸ (`value`: number): *Either‹string, [Percent](README.md#percent)›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

___

###  positionSize

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

___

###  shouldCalculate

▸ **shouldCalculate**(`t`: ExecutionContext, `expected`: Either‹string, number›, `capital`: number, `risk`: number, `stopLoss`: number): *void*

*Defined in [test/unit/test-position-size.ts:11](https://github.com/strong-roots-capital/position-size/blob/0bbd628/test/unit/test-position-size.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`t` | ExecutionContext |
`expected` | Either‹string, number› |
`capital` | number |
`risk` | number |
`stopLoss` | number |

**Returns:** *void*
