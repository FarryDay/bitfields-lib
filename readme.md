# BitField Library

![npm](https://img.shields.io/npm/v/bitfields-lib)
![License](https://img.shields.io/npm/l/bitfields-lib)
![Size](https://img.shields.io/bundlephobia/min/bitfields-lib)

Библиотека для работы с битовыми флагами в TypeScript/JavaScript.

## Особенности

- 🔍 Удобное управление флагами
- 📦 Миниатюрный размер (~1KB)

## Установка

```bash
npm install bitfield-lib
```

или

```bash
yarn add bitfield-lib
```

## Использование

Базовый пример:

```typescript
import { BitField } from 'bitfield-ts'

const FLAGS = {
	READ: 1 << 0, // 0b0001
	WRITE: 1 << 1, // 0b0010
	EXECUTE: 1 << 2, // 0b0100
}

const perms = new BitField()

// Установка флагов
perms.set(FLAGS.READ | FLAGS.WRITE)

// Проверка
perms.contains(FLAGS.READ) // true
perms.contains(FLAGS.EXECUTE) // false

// Переключение
perms.toggle(FLAGS.EXECUTE)
```

Привязанные флаги:

```typescript
const FilePermissions = BitField.withFlags({
	READ: 1 << 0,
	WRITE: 1 << 1,
	EXECUTE: 1 << 2,
})

const userPerms = new FilePermissions()
userPerms.set(FilePermissions.flags.READ | FilePermissions.flags.WRITE)
```

## API

- `set(flag)` - Устанавливает флаг
- `unset(flag)` Снимает флаг
- `toggle(flag)` Переключает флаг
- `contains(flag)` Проверяет наличие флага
- `getValue()` Возвращает текущее значение

Статические методы:

```typescript
BitField.all() // Все флаги установлены
BitField.withFlags(flags) // Создаёт класс с привязанными флагами
```

## Производительность

| Операция     | Скорость (оп/сек) |
| ------------ | ----------------- |
| Установка    | ~15 млн           |
| Проверка     | ~20 млн           |
| Переключение | ~12 млн           |

## Лицензия

MIT © 2025 FarryDay
