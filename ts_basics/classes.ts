// When working with a function which takes multiple arguments, you interface them(But using the Pascal naming convention)
class NewPoint {
    x: number | undefined;
    y: number | undefined;


    constructor(x?: number, y?:number){ // Initiazlie point to set the values of members of an object. 
        this.x = x;
        this.y = y;
    }
    
    drawPoint(){
    // Function to draw point
    console.log('X: ' + this.x + ' and Y: ' + this.y);
    }
}

let newPoint = new NewPoint(5, 8); // the let point is an object( Instance of a class)
newPoint.drawPoint();