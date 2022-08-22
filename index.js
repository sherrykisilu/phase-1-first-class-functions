function callback(){
    return "done"
}
function receivesAFunction(callback){
    return callback();
}
function returnsANamedFunction(){
    return function wash(){}
}
function returnsAnAnonymousFunction(){
    return function(){}
}
