"use strict";
exports.__esModule = true;
exports.NewPoint = void 0;
var NewPoint = /** @class */ (function () {
    function NewPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    NewPoint.prototype.draw = function () {
        console.log('X: ' + (this === null || this === void 0 ? void 0 : this._x) + " and Y: " + (this === null || this === void 0 ? void 0 : this._y));
    };
    return NewPoint;
}());
exports.NewPoint = NewPoint;
