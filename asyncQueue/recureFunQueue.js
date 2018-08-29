function asyncQueue(fun,array) {
    return new Promise((resolve,reject)=>{
        q(fun,array,0);
        function q(fun,array,index) {
            fun(array[index]).then(()=>{
                if(index +1 == array.length){
                    resolve()
                }else{
                    q(fun,array,index+1);
                }
            }).catch(()=>{
                reject()
            })
        }
    })
}
module.exports = {
    asyncQueue
}