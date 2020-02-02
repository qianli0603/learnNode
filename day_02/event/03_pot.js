const EventEmitter = require('events')

class Pot extends EventEmitter {
    constructor(){
        super();
        this.temperature = 20;
    }

    incrementTemperature(){
        if(this.temperature + 10 <= 100){
            this.temperature += 10
            this.emit('正在加热',this.temperature);
        }else{
            this.temperature = 100
        }
        if(this.temperature === 100) {
            this.emit('水开了')
        }
    }
}

module.exports = {
    createPot(){
        let pot = new Pot();
        setInterval(function(){
            pot.incrementTemperature();
        }, 1000);
        return pot;
    }
}