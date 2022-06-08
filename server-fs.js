const http = require('node:http')
const fs = require('node:fs')
const fsp = require('node:fs/promises')

// const html = fs.readFileSync('./index.html')

// const server = http.createServer((req, res) => res.end(html))

const server = http.createServer((req, res) => {
    const stat = fsp.stat('./index.html')
    res.setHeader('content-length', stat.size)

    fs.createReadStream('./index.html').pipe(res)
})

server.listen(3000, () => {
    console.log('listening 3000')
})