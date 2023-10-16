/* eslint-disable import/no-duplicates */
// ============= Test Cases =============
import type { Expect } from './test-utils'
import type { Equal } from './test-utils'

// eslint-disable-next-line unused-imports/no-unused-vars
type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

// ============= Your Code Here =============
type MyPick<T, K extends keyof T> = {
  // [key in keyof T as key extends K ? key : never]: T[key]
  [key in K]: T[key]
  // example3
}
