import { resolve } from 'node:path'
import { promises as fs } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { transform } from '../src/transform'

describe('should', async () => {
  const id = resolve(__dirname, './fixtures/index.ts')
  const code = (await fs.readFile(id, 'utf-8')).toString()
  it('exported', async () => {
    expect((await transform(code, id))?.code)
      .toMatchInlineSnapshot(`
        "interface ModuleType {
          name: string
        }

        export const list = {'./modules/a.ts': () => import('./modules/a.ts'),'./modules/b.ts': () => import('./modules/b.ts')}
        "
      `)
  })
})
