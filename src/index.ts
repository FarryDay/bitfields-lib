type BitFieldValue = number

export default class BitField {
	private value: BitFieldValue

	constructor(initialValue: BitFieldValue = 0) {
		this.value = initialValue
	}

	static createWithFlags<T extends Record<string, number>>(flags: T): BitField & { flags: T } {
		const bitField = new BitField()
		Object.assign(bitField, { flags })
		return bitField as BitField & { flags: T }
	}

	static all(): BitField {
		return new BitField(0xffffffff)
	}

	set(flag: BitFieldValue): void {
		this.value |= flag
	}

	unset(flag: BitFieldValue): void {
		this.value &= ~flag
	}

	contains(flag: BitFieldValue): boolean {
		return (this.value & flag) === flag
	}

	toggle(flag: BitFieldValue): void {
		this.value ^= flag
	}

	getValue(): BitFieldValue {
		return this.value
	}

	equals(other: BitField): boolean {
		return this.value === other.value
	}

	clone(): BitField {
		return new BitField(this.value)
	}
}
