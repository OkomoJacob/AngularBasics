export class NewPoint {
    constructor(private _x?: number, private _y?: number) {
    }
    draw() {
        console.log('X: ' + this?._x + " and Y: " + this?._y);
    }
}