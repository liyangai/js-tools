function asyncQueue(fun,array) {
    return new Promise((resolve,reject)=>{
        (async function start(params) {
           try {
            for(let item of array){
                await fun(item);
            }
            resolve()
           } catch (error) {
               reject(error)
           }
        })()
    })
}

module.exports = {
    asyncQueue
}