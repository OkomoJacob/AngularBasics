/* There exist many data types as below*/
var a;
var b;
var c;
var d; // Any data type
var e = [1, 2, 3]; // array of numbers
var f = [1, true, 'a']; // any array

/* enum enables you to put allin a single basket */
var ColorsRed = 0;
var ColorBlue = 1;
var ColorsGren = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["White"] = 3] = "White";
})(Color || (Color = {}));
;
var backGroundColor = Color.Blue;
