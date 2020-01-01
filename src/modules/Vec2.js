// An object representing a 2D vector.
// Based on the Vector2 class from LibGDX.
// Written by Rahat Ahmed (http://rahatah.me/d).
// Edited by Tom Burris (https://github.com/Tombez)

const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const assign = (a, b) => b;

const isNumber = n => typeof n === "number" && n === n; // NaN is not equal to itself

class Vec2 {
    constructor(x = 0, y = 0) {
        if (!isNumber(x) || !isNumber(y))
            throw new TypeError(`Cannot create Vec2 from non-number: ${x}, ${y}.`);
        this.x = x;
        this.y = y;
    }
    static fromAngle(angle) {
        if (!isNumber(angle))
            throw new TypeError(`Cannot create Vec2 from non-number: ${angle}.`);
        return new Vec2(Math.cos(angle), Math.sin(angle));
    }
    executeOperation(operation, vecOrNum) {
        if (vecOrNum instanceof Vec2) {
            this.x = operation(this.x, vecOrNum.x);
            this.y = operation(this.y, vecOrNum.y);
        } else if (isNumber(vecOrNum)) {
            this.x = operation(this.x, vecOrNum);
            this.y = operation(this.y, vecOrNum);
        } else {
            throw new TypeError(`Tried to do math with ${vecOrNum}.`);
        }
    }
    add(vecOrNum) {
        this.executeOperation(addition, vecOrNum);
        return this;
    }
    sum(vecOrNum) {
        return this.clone().add(vecOrNum);
    }
    subtract(vecOrNum) {
        this.executeOperation(subtraction, vecOrNum);
        return this;
    }
    difference(vecOrNum) {
        return this.clone().subtract(vecOrNum);
    }
    multiply(vecOrNum) {
        this.executeOperation(multiplication, vecOrNum);
        return this;
    }
    product(vecOrNum) {
        return this.clone().multiply(vecOrNum);
    }
    divide(vecOrNum) {
        this.executeOperation(division, vecOrNum);
        return this;
    }
    quotient(vecOrNum) {
        return this.clone().divide(vecOrNum);
    }
    assign(vecOrNum) {
        this.executeOperation(assign, vecOrNum);
        return this;
    }
    angle() {
        return Math.atan2(this.y, this.x); // Not a mistake, Math.atan2() takes y first
    }
    clone() {
        return new Vec2(this.x, this.y);
    }
    dist() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    distSquared() {
        return this.x * this.x + this.y * this.y;
    }
    normalize() {
        const dist = this.dist();
        if (dist === 0) return this;
        return this.multiply(1 / dist);
    }
}

module.exports = Vec2;
