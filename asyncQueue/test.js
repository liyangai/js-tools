var asyncAwitQueue = require('./asyncAwitQueue').asyncQueue;
var recureFunQueue = require('./recureFunQueue').asyncQueue;
const arr = [1,2,3,4];
const fun = function (number) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(number)
            resolve();
        }, 2000);
    })
}

// asyncAwitQueue(fun,arr).then(()=>{console.log("end")});
recureFunQueue(fun,arr).then(()=>{console.log("end")});