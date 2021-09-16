function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
      //set stroke and fill to same color
    fill(21,85,210);
    stroke(21,85,210);
      //draw a line of shapes along the x axis, dark blue circles
    for(let x = 0; x<10; x++){
      circle(x*45,200,20);
    }
      //draw a line of shapes along the y axis, light blue squares
    for(let y = 0; y<10; y++){
      fill(21,231,283);
      square(20, y*45, 20);
    }
  }
