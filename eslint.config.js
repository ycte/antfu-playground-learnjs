// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: [
      // eslint ignore globs here
      './my-type-challenge/*.ts',
      'my-type-challenge',
    ],
  },
  {
    rules: {
      // overrides

    },
  },
)
