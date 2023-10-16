// ============= Test Cases =============
import type { Equal, Expect } from './test-utils'

// eslint-disable-next-line unused-imports/no-unused-vars
type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

// ============= Your Code Here =============
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
