// When working with a function which takes multiple arguments, you interfcae them(But using the Pascal naming convention)
var NewPoint = /** @class */ (function () {
    function NewPoint() {
    }
    NewPoint.prototype.draw = function () {
        // Function to draw point
        console.log('X: ' + this.a + ' and Y: ' + this.b);
    };
    NewPoint.prototype.getDistance = function (another) {
        //
    };
    return NewPoint;
}());
var point = new NewPoint;
point.a = 2;
point.b = 5;
point.draw();
