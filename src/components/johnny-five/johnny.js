const Five = require('johnny-five');
const Board = new Five.Board({repl:false});
const axios = require('axios');

module.exports = {
    StartArduino(){
        Board.on('ready', function(){
            var led13 = new Five.Led(13);
            led13.on()
        })
    },
    ControlArduino(req, res){
        if(Board.isReady){
            var led = new Five.Led(13)
            led.blink(500)
        }
    },
    async ControlDevice(req, res){
        if(Board.isReady){
            const response = await axios.get(`http://localhost:8000/devices/getData/${req.params.deviceId}`)
            console.log(response.data)
            Object.keys(response['data']['Rooms']).map(function(key){
                console.log(key)
                var led = new Five.Led(response['data']['Rooms'][key]['pin'])
                led.blink(1500)
            })
            res.send(JSON.stringify(response.data))
        }
    }
}