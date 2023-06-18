//using https://github.com/abbr/text2wav.node.js
// other example http://mary.dfki.de/download/index.html

let out = await text2wav('测试', {voice: 'zh'})

const text = (async () => {
    const text2wav = require('text2wav')
    let out = await text2wav('test')
    // out is of type Uint8Array
    const assert = require('assert')
    assert.equal(out[0], 82) //R
    assert.equal(out[1], 73) //I
    assert.equal(out[2], 70) //F
    assert.equal(out[3], 70) //F
  })()

text()