// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

// eslint-disable-next-line unused-imports/no-unused-vars
type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

// eslint-disable-next-line unused-imports/no-unused-vars
type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]

// ============= Your Code Here =============
type First<T extends any[]> = T extends [] ? never : T[0]
