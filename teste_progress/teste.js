var ProgressBar = require('progress');
var https = require('https');

// const agent = new https.Agent({
//     rejectUnauthorized: false
// });

// var req = https.request({
//     host: 'download.github.com',
//     port: 443,
//     path: '/visionmedia-node-jscoverage-0d4608a.zip',
//     agent: agent
// });

// req.on('response', function(res){
//     var len = parseInt(res.headers['content-length'], 10);
    
//     console.log();
//     var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
//         complete: '=',
//         incomplete: ' ',
//         width: 20,
//         total: len
//     });
    
//     res.on('data', function (chunk) {
//         bar.tick(chunk.length);
//     });
    
//     res.on('end', function () {
//         console.log('\n');
//     });
// });

// req.end();
var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 100,
    total: 10
});

async function esperar(segundos) {
    return new Promise(async (resolve, reject) => {
        await setTimeout(() => {
            bar.tick(2);
            resolve(true);
        }, segundos * 1000);
    });
}

async function roboTeste() {
    console.log("Começando");

    
    for (let index = 2; index <= 10; index = index + 2) {
        await esperar(2);
        
        console.log(`${index} - Esperei 2 segundos`);
    }

    // await esperar(2);
    // console.log("Esperei 2 segundos");
    // await esperar(2);
    // console.log("Esperei 2 segundos");
    // await esperar(2);
    // console.log("Esperei 2 segundos");
}

roboTeste();

