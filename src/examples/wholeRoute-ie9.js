const express = require('express')

const app = express()

app.post('/upload', function (req, res) {
    return '11111'
});

app.listen(9999,()=>{
    console.log('Express server running at http://127.0.0.1')
})