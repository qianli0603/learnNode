const cheerio = require('cheerio')
const $ = cheerio.load(`
    <div>
        <header>hello world</header>
    </div>
`)

const hd = $('header').text()

console.log(hd)