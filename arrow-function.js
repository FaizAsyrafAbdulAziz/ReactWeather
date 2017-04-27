var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name){
    console.log('foreach', name);
});

names.forEach((name) => {
    console.log('arrowFunc', name);
});


function add(a, b){
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

var addExpression = (a, b) =>  a + b;


console.log(addStatement(5,3));
console.log(addExpression(2,4));
console.log(add(4,3));
console.log(add(9,0));