var Dollar = function(amount) {
    this.amount = amount

    this.times = function(multiplier) {
        return new Dollar(this.amount * multiplier);
    }

    this.equals = function(dollar) {
        return this.amount == dollar.amount;
    }

};

describe('TDD', () => {

    test('multiplication', () => {
        let five = new Dollar(5);
        expect(new Dollar(10).equals(five.times(2))).toBeTruthy();
        expect(new Dollar(15).equals(five.times(3))).toBeTruthy();
    });

    test('equality', () => {
        expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
        expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy();

        expect(new Franc(5).equals(new Dollar(6))).toBeTruthy();
    });

});

