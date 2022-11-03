// When working with a function which takes multiple arguments, you interface them(But using the Pascal naming convention)
var NewPoint = /** @class */ (function () {
    function NewPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    NewPoint.prototype.drawPoint = function () {
        // Function to draw point
        console.log('X: ' + this.x + ' and Y: ' + this.y);
    };
    return NewPoint;
}());
var newPoint = new NewPoint(5, 8); // the let point is an object( Instance of a class)
newPoint.drawPoint();
