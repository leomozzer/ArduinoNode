const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const server = require('http').Server(app);

// const Five = require('johnny-five');
// const Board = new Five.Board({repl:false});

const port = 7000

// Board.on('ready', function(){
//     var led = new Five.Led(13);
//     led.blink(500)
// })

app.use(bodyParser.json());
app.use(require('./routes'))

server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
    const Johnny = require('./components/johnny-five/johnny');
    Johnny.StartArduino();
})