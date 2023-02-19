var rect = require('./rectangle');

const solve = (x,y) => {
    x <= 0 || y <= 0 ? 
    console.log(' Invalid values') 
    : solveRectangle(x,y);
}

const solveRectangle = (x,y) => {
    
    console.log(` Perimeter of rectangle = ${rect.perimeter(x,y)}`);
    console.log(` Area of rectangle = ${rect.area(x,y)}`);
}

console.log()
solve(2,4)
console.log()
solve(3,5)
console.log()
solve(0,5)
console.log()
solve(-4,5)
console.log()