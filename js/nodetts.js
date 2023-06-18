import nodtts from 'nodtts'
 
// Generate speech from text and save to a file
await nodtts.file("~/voices/hello.mpg", "Hello from Indonesia!")
 
// Other available functions:
// Generate file url only. This func also need internet to work
const url = await nodtts.url("Hello from Indonesia!")
 
// Generate file stream you can pipe
const stream = await nodtts.stream("Hello from Indonesia!")
const testfile = fs.createWriteStream("~/voices/test.mpg")
 
stream.pipe(testfile)
 
fwstream.on('finish', function () {
    fwstream.close(callbackfn)
})