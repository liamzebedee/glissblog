// Read stdin into string, and then output {"content": content} to `file`.json.
//
// Usage:
//   node to-json.js <file>

const fs = require('fs')
const path = require('path')

const file = process.argv[2]
const content = fs.readFileSync(file, 'utf-8')

fs.writeFileSync(
    path.join(__dirname, `../posts/${file}.json`),
    JSON.stringify({ content }),
    'utf-8'
)

