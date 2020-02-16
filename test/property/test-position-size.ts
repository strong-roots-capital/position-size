import { testProp, fc } from 'ava-fast-check'


/**
 * Library under test
 */

import { positionSize } from '../../src/position-size'


testProp(
    'should calculate position size for arbitrary inputs',
    [
        fc.float(),
        fc.float(100),
        fc.float(0, Infinity)
    ],
    (
        capital,
        risk,
        stopLoss
    ) => {

        const result = positionSize(capital, risk, stopLoss)

        if (result.isLeft()) {

            const message = result.extract()

            switch (true) {
                case message.endsWith('is NaN'):
                    return Number.isNaN(capital)
                        || Number.isNaN(risk)
                        || Number.isNaN(stopLoss)

                case message.includes('cannot exceed'):
                    return risk > 100

                case message.includes('cannot deceed'):
                    return risk <= 0 || stopLoss <= 0
            }
        }

        return capital * risk / stopLoss === result.unsafeCoerce()
    }
)
