const fs = require('fs')
const path = require('path')

// Get all files in the ./md/ directory
const files = fs.readdirSync(path.join(__dirname, 'md'))

const index = {}

// For each file, read contents.
// and add to index.
files.forEach(file => {
    const slug = file.replace('.md', '') // TODO use actual slugify
    const content = fs.readFileSync(path.join(__dirname, `md/${file}`), 'utf-8')
    index[slug] = { slug, content }
})

fs.writeFileSync(
    path.join(__dirname, `./index.js`),
    `const data = ${JSON.stringify(index, null, 1)};\n\nexport default data`,
    'utf-8'
)