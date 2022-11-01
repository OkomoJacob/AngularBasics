/* There exist many data types as below*/
let a: number;
let b: boolean;
let c: string;
let d: any; // Any data type
let e: number[] = [1, 2, 3]; // array of numbers
let f: any[] = [1, true, 'a']; // any array

/* enum enables you to put allin a single basket */
const ColorsRed = 0;
const ColorBlue = 1;
const ColorsGren = 2;

enum Color {Red = 0, Green = 1, Blue = 2, White = 3};
let backGroundColor = Color.Blue;