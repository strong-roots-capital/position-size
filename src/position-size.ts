/**
 * position-size
 * Calculate position size given risk tolerance and distance to stop-loss
 */

import { Either, Left, Right } from 'purify-ts/Either'

type Percent = number

function parseIsNotNaN(tag: string, value: number): Either<string, number> {
    return Number.isNaN(value) ? Left(`${tag} is NaN`) : Right(value)
}

function parsePercent(
    tag: string,
    lowerBoundInclusive: number,
    upperBoundExclusive: number
): (value: number) => Either<string, Percent> {
    return function parsePercentWithBounds(value) {
        if (value > upperBoundExclusive) {
            return Left(`${tag} cannot exceed ${upperBoundExclusive} percent`)
        }

        if (value <= lowerBoundInclusive) {
            return Left(`${tag} cannot deceed ${lowerBoundInclusive} percent`)
        }

        return Right(value)
    }
}

const parseRisk = parsePercent(`Risk`, 0, 100)
const parseStopLoss = parsePercent(`Stop-loss`, 0, Infinity)

/**
 * Calculate position-size given risk-tolerance and distance to
 * stop-loss.
 */
export function positionSize(
    capital: number,
    riskAsPercentOfCapital: number,
    percentDistanceToStopLoss: number
): Either<string, number> {
    const principal = parseIsNotNaN(`Capital`, capital)
    const risk = parseIsNotNaN(`Risk`, riskAsPercentOfCapital).chain(parseRisk)
    const stop = parseIsNotNaN(`Percent`, percentDistanceToStopLoss).chain(
        parseStopLoss
    )

    if (risk.isLeft()) {
        return risk
    }

    if (stop.isLeft()) {
        return stop
    }

    return principal.ap(
        Right(
            (capital: number) =>
                capital * risk.unsafeCoerce() / stop.unsafeCoerce()
        )
    )
}

//  LocalWords:  upperBoundExclusive lowerBoundInclusive
