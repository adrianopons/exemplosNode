const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

app.post('/upload', function(req, res) {
    
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }
    
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let sampleFile = req.files.teste_arquivo;

    // Use the mv() method to place the file somewhere on your server
    sampleFile.mv('img/' + req.files.teste_arquivo.name, function(err) {
        if (err)
            return res.status(500).send(err);
        
        console.log("Esperando");
        setTimeout(() => {
            res.send('File uploaded!');
            console.log("File uploaded");
        }, 10000);
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

