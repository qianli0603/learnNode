let potone = require('./03_pot');
let pot = potone.createPot();
pot.on('正在加热',function(temperature){
    console.log('不要着急现在的温度是' + temperature + '℃' + '请耐心等待');
})

pot.once('水开了',function(temperature){
    console.log('沏茶，慢慢享受');
})
