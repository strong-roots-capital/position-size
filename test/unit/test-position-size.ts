import test, { ExecutionContext } from 'ava'
import { Either, Left, Right } from 'purify-ts/Either'

/**
 * Unit under test
 */

import { positionSize } from '../../src/position-size'


function shouldCalculate(
    t: ExecutionContext,
    expected: Either<string, number>,
    capital: number,
    risk: number,
    stopLoss: number
): void {
    t.deepEqual(
        expected,
        positionSize(capital, risk, stopLoss)
    )
}

shouldCalculate.title = function title(
    _providedTitle = '',
    expected: number,
    capital: number,
    risk: number,
    stopLoss: number
): string {
    return `should calculate ${expected} when capital=${capital}, risk=${risk}, stop-loss=${stopLoss}`
}


/*********************************************************************
 * Test cases -- Longs
 ********************************************************************/

/* standard tests */
test(shouldCalculate, Right(100), 100, 1, 1)
test(shouldCalculate, Right(50), 100, 0.5, 1)
test(shouldCalculate, Right(50), 100, 1, 2)
test(shouldCalculate, Right(100), 100, 5, 5)
test(shouldCalculate, Right(500), 100, 5, 1)

/* edge-cases */
test(shouldCalculate, Right(100), 100, 100, 100)

/* errors */
test(shouldCalculate, Left('Risk cannot exceed 100 percent'), 100, 100.001, 1)
test(shouldCalculate, Left(`Risk cannot deceed 0 percent`), 100, 0, 1)
test(shouldCalculate, Left(`Stop-loss cannot deceed 0 percent`), 100, 1, 0)

/*********************************************************************
 * Test cases -- Shorts
 ********************************************************************/

test(shouldCalculate, Right(0.5), 100, 1, 200)
test(shouldCalculate, Right(1), 100, 1, 100)

//  LocalWords:  stopLoss
