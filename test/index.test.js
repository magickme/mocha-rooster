const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            // Setup
            const expected = 'moo!';

            //Exercise
            const call = Rooster.announceDawn();

            //Verify
            assert.deepStrictEqual(call, expected);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {
            //Setup
            const expected = '23';

            //Exercise
            const dawn = Rooster.timeAtDawn(23);

            //Verify
            assert.strictEqual(dawn, expected);
        });
        it('throws an error if passed a number less than 0', () => {
            //Setup
            const hour = -1;
            const expected = RangeError;

            //Exercise + Verify
            assert.throws(() => {
                    Rooster.timeAtDawn(hour);
                },
                expected
            )
        });
        it('throws an error if passed a number greater than 23', () => {
            //Setup
            const hour = 24;
            const expected = RangeError;

            //Exercise + Verify
            assert.throws(() => {
                    Rooster.timeAtDawn(hour);
                },
                expected
            )
        });
    });
});