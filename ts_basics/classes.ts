// When working with a function which takes multiple arguments, you interface them(But using the Pascal naming convention)
class NewPoint {
    a: number | undefined;
    b: number | undefined;
    
    draw(){
    // Function to draw point
    console.log('X: ' + this.a + ' and Y: ' + this.b);
    }
}

let point = new NewPoint; // the let point is an object( Instance of a class)
point.a = 2;
point.b = 5;
point.draw();