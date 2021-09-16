function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    fill(21,85,210);
    stroke(21,85,210);
    for(let x = 0; x<10; x++){
      circle(x*45,200,20);
    }
    for(let y = 0; y<10; y++){
      fill(21,231,283);
      square(20, y*45, 20);
    }
  }