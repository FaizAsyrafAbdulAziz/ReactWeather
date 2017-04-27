function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        } else {
            reject(a + ' & ' + b + ' is not a number');
        }
    });

}


addPromise(4,3).then(
    function(result){
        console.log('The result of sum is ' + result);
    },
    function(err){
        console.log('Error: ' + err);
    }
);


addPromise('4','3').then(
    function(result){
        console.log('The result of sum is ' + result);
    },
    function(err){
        console.log('Error: ' + err);
    }
);


/*function getTempCallBack(location, callback){
    callback(undefined, 78);
    callback('City not found')
}

getTempCallBack('Philadelphia',function(err, temp){
    if(err){
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise(location){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve(79);
            reject('City not found');
        }, 1000);
        
    });
}

getTempPromise('Philadelphia').then(function(temp){
    console.log('promise success', temp);
}, function(err){
    console.log('promise error', err);
});*/