function setup(){
    createCanvas(500,500);
}

function draw(){
    background(255);
    noFill();

    for(var i = 0; i<50; i++){
        circle(250,250,i*10);
    }
}