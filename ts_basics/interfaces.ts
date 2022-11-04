// When working with a function which takes multiple arguments, you interface them (But using the Pascal naming convention)
interface Point{
    x: number,
    y: number,
}
let drawPoint = (point: Point) =>{
    // Function to draw point
}
drawPoint({
    x: 1,
    y: 5
})