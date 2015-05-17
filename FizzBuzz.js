var gameArray = [];


var fillArray = function(){
    for(i = 0; i < 21; i++){
        gameArray.push(i+1);
    }
};

fillArray();

var printArray = function(Obj){
    for(i in gameArray){
        if (i != 0){
            if(i%3 === 0  && i%5 === 0){
                console.log('FizzBuzz');
        }
    
            else if (i%3 ===0){
                console.log('Fizz');
            }   
    
            else if (i%5 === 0){
                console.log('Buzz');
            }
    
            else {
                console.log(i);
            }
        }
    }
};

printArray();

