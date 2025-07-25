"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BitField {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }
    static createWithFlags(flags) {
        const bitField = new BitField();
        Object.assign(bitField, { flags });
        return bitField;
    }
    static all() {
        return new BitField(0xffffffff);
    }
    set(flag) {
        this.value |= flag;
    }
    unset(flag) {
        this.value &= ~flag;
    }
    contains(flag) {
        return (this.value & flag) === flag;
    }
    toggle(flag) {
        this.value ^= flag;
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
    clone() {
        return new BitField(this.value);
    }
}
exports.default = BitField;
