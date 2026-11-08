// Verifies the esbuild ESM output in dist/esm: every enum declared in src is
// emitted as a pure-annotated IIFE and exported, the output contains no
// CommonJS syntax, and the enums index.ts re-exports from forms.ts are exported
// from dist/esm/index.js. Exits 1 listing every failure.

const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const srcDir = path.join(root, 'src')
const esmDir = path.join(root, 'dist', 'esm')
const sources = ['index.ts', 'forms.ts']
const formsEnumsReExportedFromIndex = ['FormFieldWidth', 'FormFieldCategory', 'FormFieldType', 'FormFieldVariant']

const failures = []

function enumNames(source) {
  return Array.from(source.matchAll(/^export enum (\w+)/gm), m => m[1])
}

// Names listed in the trailing `export { ... }` block esbuild emits.
function exportedNames(output) {
  const block = output.match(/^export \{([^}]*)\}/m)
  if (!block) return new Set()
  return new Set(
    block[1]
      .split(',')
      .map(s => s.trim())
      .filter(Boolean),
  )
}

for (const file of sources) {
  const srcPath = path.join(srcDir, file)
  const outPath = path.join(esmDir, file.replace(/\.ts$/, '.js'))
  if (!fs.existsSync(outPath)) {
    failures.push(`${outPath} is missing`)
    continue
  }
  const source = fs.readFileSync(srcPath, 'utf8')
  const output = fs.readFileSync(outPath, 'utf8')
  const exported = exportedNames(output)

  for (const name of enumNames(source)) {
    if (!output.includes(`var ${name} = /* @__PURE__ */ ((`)) {
      failures.push(`${outPath}: enum ${name} is not emitted as a /* @__PURE__ */ IIFE`)
    }
    if (!exported.has(name)) {
      failures.push(`${outPath}: enum ${name} is not exported`)
    }
  }

  if (/\brequire\(/.test(output)) {
    failures.push(`${outPath}: contains require(`)
  }
  if (/\bexports\./.test(output)) {
    failures.push(`${outPath}: contains exports.`)
  }
}

const indexOut = path.join(esmDir, 'index.js')
if (fs.existsSync(indexOut)) {
  const exported = exportedNames(fs.readFileSync(indexOut, 'utf8'))
  for (const name of formsEnumsReExportedFromIndex) {
    if (!exported.has(name)) {
      failures.push(`${indexOut}: forms enum ${name} is not re-exported`)
    }
  }
}

if (failures.length > 0) {
  console.error('check-esm failed:')
  for (const f of failures) console.error(`  ${f}`)
  process.exit(1)
}

console.log(`check-esm: ${sources.length} files OK`)
