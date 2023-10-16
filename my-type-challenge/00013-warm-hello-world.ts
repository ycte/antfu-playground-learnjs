// ============= Test Cases =============
import type { Equal, Expect, NotAny } from './test-utils'

// eslint-disable-next-line unused-imports/no-unused-vars
type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

// ============= Your Code Here =============
type HelloWorld = string // expected to be a string
