/* eslint-disable no-console */
import { dirname } from 'node:path'
import MagicString from 'magic-string'
import fg from 'fast-glob'

// RE ?: --- 匹配的 <\w+> 在 res 中删除，即 '<a>' 结果为 ''
const importGlobRE = /\bimport\.meta\.globNext(?:<\w+>)?\((.*)\)/g

export async function transform(code: string, id: string) {
  const matchs = Array.from(code.matchAll(importGlobRE))
  if (!matchs.length)
    return
  const s = new MagicString(code)
  for (const match of matchs) {
    // match importGlobRE
    const glob = match[1].slice(1, -1)
    const files = await fg(glob, {
      dot: true,
      cwd: dirname(id),
    })
    // magic-string: 保持原本的索引更改字符串，同时处理 sourceMap

    const start = match.index!
    const end = start + match[0].length
    const replacement
      = `{${files.map(file => `'${file}': () => import('${file}')`).join(',')}}`
    s.overwrite(start, end, replacement)
    code = `${code.slice(0, start)}${replacement}${code.slice(end)}`
    console.log({
      codeAfter: s.toString(),
      code,
      match,
      glob,
      id,
      files,
    })
    const 珊瑚宫心海 = `xiaoxi's wife`
    console.log(`珊瑚宫心海：${珊瑚宫心海}`)
  }
  return {
    code: s.toString(),
    map: s.generateMap({ hires: true }),
  }
}
