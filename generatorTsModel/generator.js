var fs = require("fs")
var path = require('path')
var dirPath;

function generator(obj,start) {
    dirPath = path.join(__dirname,start)
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
    }
    g(obj,start)
}


function g(obj,start) {
    const tspath = dirPath + '/'+ start +'.ts';
    fs.writeFileSync(tspath,'')
    var allRes = [];
    for(let key in obj){
        let newKey = start + '_' + key
        if(Array.isArray(obj[key])){
            if(typeof obj[key][0] == 'object'){
                
                if(key.endsWith('es')){
                    newKey = newKey.slice(0,-2);
                   
                }else if(key.endsWith('s')){
                    newKey = newKey.slice(0,-1);
                }
                allRes.push({
                    key:key,
                    val: newKey + '[]',
                    importState : newKey
                })
                g(obj[key][0],newKey);
            }else {
                allRes.push({
                    key:key,
                    val: typeof obj[key][0] + '[]'
                })
            }

        }else if(typeof obj[key] == 'object'){
            allRes.push({
                key:key,
                val: newKey,
                importState:newKey
            })
            g(obj[key],newKey);
        }else{
            allRes.push({
                key:key,
                val: typeof obj[key] 
            })
        }
        
    }

    //创建import 语句
    for(let res of allRes){
        if(res.importState){
            fs.appendFileSync(tspath,"import { "+ res.importState +" } from './"+ res.importState +"';\n")
        }
    }

    //创建类的语句
    fs.appendFileSync(tspath,"export class "+ start +"{\n")
    for(let res of allRes){
        fs.appendFileSync(tspath,"    "+res.key+":"+ res.val +"\n")
    }
    fs.appendFileSync(tspath,"}")
}

module.exports = {
    generator : generator
}