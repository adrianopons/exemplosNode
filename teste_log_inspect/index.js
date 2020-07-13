const read = require('safe-log-reader');

const filePath = "log";
const path = "log";

read.createReader(filePath, {
    batchLimit: 1024,
    bookmark: {
        dir: path.resolve('someDir', '.bookmark'),
    }
})
.on('readable', function () { this.readLine(); })
.on('read', function (line, count) {
    // do something with this line of text
})
.on('end', function (done) {
    // close up shop and go home
});