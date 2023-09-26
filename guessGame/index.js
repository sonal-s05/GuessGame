console.log("hey");


//lets make a guess game
let maximum=parseInt(prompt("Enter the maximum number"));

Math.floor(Math.random()*maximum)+1;
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number"));
}

const targetNum=Math.floor(Math.random()*maximum)+1;
let attempts=1;

let guess=parseInt(prompt("Enter the first guess"));
while(parseInt(guess)!==targetNum){//convert the guess in parse int rather than converting each time
    if(guess==='q')
    break;
    attempts++;
    if(guess>targetNum){
        guess=(prompt("Too large! Enter a new guess"));
    }
    else{
        guess=(prompt("Too small!Enter a new guess"));
    }
}
if(guess==='q'){
    console.log("OK! Quitinggg...")
}
else{
console.log("You got it!");
}