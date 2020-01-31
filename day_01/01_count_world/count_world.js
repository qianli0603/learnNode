const fs = require('fs')
fs.readFile('../assets/engilsh.txt','utf-8',function(err,data){
    if(err){
        console.log(err)
        return
    }
    // console.log(data)
    const words = data.split(/\W+/)
    // console.log(words)
    let map = new Map()
    for(word of words ){    
        if(!word){
            continue;
        }
        if(!map.has(word)){
            map.set(word,0)
        }
        let count = map.get(word)
        count = count + 1
        map.set(word,count)
        // console.log(word)
    }
        // console.log(map)
        let keys = map.keys()
        let res = []
        for(key of keys){
            let wordCount = {
                word:key,
                count:map.get(key)
            }
            res.push(wordCount)
            // console.log(res)
            res.sort(function(a,b){
                return b.count - a.count
            })
            // console.log(`${key} : ${map.get(key)}`)
            // res.push(`${key} : ${map.get(key)}`)
        }
        console.log(res)

        let newRes = res.map(function(item){
            return item.word + '              ' + item.count
        })
        console.log(newRes)

        let txt = newRes.join('\n')
        fs.writeFile('./counter.txt',txt,function(err){
            if(err){
                console.log('err')
                return
            }
            console.log('执行完毕')
        })
})