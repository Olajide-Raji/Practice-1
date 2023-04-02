function almithyFormula(a, b, c) {
    let firstAnswer, secondAnswer, x3, x4, x5, squareRoot;
    x3= 4 * a * c;
    x4= 2 * a;
    b2= b * b;
    x5= b2 - x3;
    squareRoot = Math.sqrt(x5)
    
    firstAnswer = ((-b) + squareRoot) / x4;
    secondAnswer = ((-b) - squareRoot) / x4;

    console.log("Your answer is " + firstAnswer + " or " + secondAnswer);
}

almithyFormula(4, -11, -21);



let a = 2;
let b = 2;
let c = 3;
let d = a + b + c;
console.log(d);

