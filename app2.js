
function setup() {
    createCanvas(500, 500);
}

function draw() {
    //make the background white
    background(255);
    //make stroke color white
    stroke(255);
    //fill shape with red color
    fill(255, 0, 0);
    // for loop - sets the amount of rows vertically. <= 3 makes 
    // the required 4 rows
    for (let yAxis = 0; yAxis <= 3; yAxis++) {
        // sets the amount of squares in each row along the x axis, <= yAxis as the final row will be 4 by 4
        for (let xAxis = 0; xAxis <= yAxis ; xAxis ++) {
           square(xAxis * 50, yAxis * 50, 50);
        }
    }
}