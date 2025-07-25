import BitField from '../src' // Предполагается, что ваш класс находится в этом файле

describe('BitField', () => {
	const READ = 1 << 0 // 0b001
	const WRITE = 1 << 1 // 0b010
	const ADMIN = 1 << 2 // 0b100

	test('all() should return field with all bits set', () => {
		const flags = BitField.all()
		expect(flags.getValue()).toBe(0xffffffff)
	})

	test('set() and unset() should work correctly', () => {
		const flags = new BitField()

		// Test set flags
		flags.set(READ)
		expect(flags.getValue()).toBe(1)
		flags.set(WRITE)
		expect(flags.getValue()).toBe(3) // 1 | 2 = 3

		// Test unset flags
		flags.unset(ADMIN) // ADMIN не установлен, ничего не должно измениться
		expect(flags.getValue()).toBe(3)
		flags.unset(READ)
		expect(flags.getValue()).toBe(2) // 3 & ~1 = 2
	})

	test('contains() should correctly check flags', () => {
		const flags = new BitField()
		flags.set(READ)
		expect(flags.contains(READ)).toBe(true)
		expect(flags.contains(WRITE)).toBe(false)
	})

	test('toggle() should flip bits correctly', () => {
		const flags = new BitField()
		flags.toggle(ADMIN)
		expect(flags.contains(ADMIN)).toBe(true)
		flags.toggle(ADMIN)
		expect(flags.contains(ADMIN)).toBe(false)
	})

	// Дополнительный тест для проверки equals и clone
	test('equals() and clone() should work correctly', () => {
		const flags1 = new BitField()
		flags1.set(READ | WRITE)

		const flags2 = flags1.clone()
		expect(flags1.equals(flags2)).toBe(true)

		flags2.toggle(ADMIN)
		expect(flags1.equals(flags2)).toBe(false)
	})

	// Тест для проверки createWithFlags
	test('createWithFlags() should attach flags to instance', () => {
		const MyFlags = {
			READ: 1 << 0,
			WRITE: 1 << 1,
			ADMIN: 1 << 2,
		}

		const flags = BitField.createWithFlags(MyFlags)
		flags.set(flags.flags.READ | flags.flags.WRITE)

		expect(flags.contains(flags.flags.READ)).toBe(true)
		expect(flags.contains(flags.flags.ADMIN)).toBe(false)
	})
})
