var prompt = require('sync-prompt').prompt;

//Increment function
//

function increment(x){
  x++;
  return x;
}

var z = increment(3);
console.log(z);
var z = increment(7);
console.log(z);
var z = increment(9);
console.log(z);
var z = increment(12);
console.log(z);

//Square function
//

function square (x){
  x *= x;
  return x;
}

var y = square(2);
console.log(y);
y = square(56);
console.log(y);
y = square(9);
console.log(y);
y = square(2);
console.log(y);

//Area function
//

function area(length, width){
  return length * width;
}

var r = area(2,2);
console.log(r);
r = area(4,4);
console.log(r);
r = area(6,6);
console.log(r);
r = area(8,8);
console.log(r);

//Volume function
//

function volume (length, width, height){
  return area(length,width) * height;
}

var v = volume(2,2,2);
console.log(v);
v = volume(4,4,4);
console.log(v);
v = volume(6,6,6);
console.log(v);
v = volume(8,8,8);
console.log(v);

//Calling and printing a series of functions
//

var k;
k = (area(square(increment(3) + increment(4)), square(2)));
console.log(k);

//sayHello function: no inputs, no outputs; returns 'hello!' in console
//

function sayHello (){
  console.log('hello!');
}

sayHello();

//makeUpper function: returns a string input into ALL CAPS
//

function makeUpper(string){
  return string.toUpperCase();
}

var txt = makeUpper('hello!');
console.log(txt);


//canDrink function: returns if a person of x can drink or not (Boolean T/F)
//

function canDrink(age){
 return (age >= 21);
}

var legal = canDrink(15);
console.log('Can you drink?',legal);
legal = canDrink(30);
console.log('Can you drink?',legal);
legal = canDrink(55);
console.log('Can you drink?',legal);
legal = canDrink(4);
console.log('Can you drink?',legal);

//Letter grade function: returns letter grade
//

function letterGrade(grade){
  if(grade >= 90){
    return 'A';
  }else if(grade >= 80){
    return 'B';
  }else if(grade >= 70){
    return 'C';
  }else if(grade >= 60){
    return 'D';
  }else{
    return 'F';
  }
}

var grade = letterGrade(99);
console.log(grade);
grade = letterGrade(82);
console.log(grade);
grade = letterGrade(72);
console.log(grade);
grade = letterGrade(61);
console.log(grade);
grade = letterGrade(33);
console.log(grade);

//Add tax function: returns price + tax = totalCost.
//

function addTax(goods, taxPct){
  return goods + (goods * (taxPct/100));
}

var totalPrice = addTax(100,10);
console.log('$' + totalPrice.toFixed(2));
totalPrice = addTax(200,10);
console.log('$' + totalPrice.toFixed(2));
totalPrice = addTax(300,10);
console.log('$' + totalPrice.toFixed(2));
totalPrice = addTax(400,10);
console.log('$' + totalPrice.toFixed(2));

/*Sum function: creates a function that adds the values of an array.
 * When you call the function, you MUST reference an exiting array, or enter the numbers manually.
*/

function sum(numbers){
  var sigma = 0;
  for(var i = 0; i < numbers.length; i++){
    sigma += numbers[i];
  }
  return sigma;
}

var sum = sum([2,4,6,8]);
console.log('Σ = ' + sum);

//Factorial function: returns factorial of a number
//

function factorial(number) {
    if (number == 0 || number == 1){
      return 1;
    }else{
      return factorial(number - 1) * number;
    }
}

var product = factorial(0);
console.log(product);
product = factorial(1);
console.log(product);
product = factorial(2);
console.log(product);
product = factorial(3);
console.log(product);
product = factorial(4);
console.log(product);
product = factorial(5);
console.log(product);

//OR

function factorial(number){
  var product = 1;
  for(var i = 2; i <= number; i++){
    prodduct
  }
  return product;
}

var product = factorial(5);
console.log(product);


//Die roll function: returns random number between 1 - 6
//

function rollDie(){
  return Math.floor(Math.random() * 6) + 1;
}

var d;

for(var i = 0; i < 10; i++){
  d = rollDie();
  console.log('roll: ', d);
}

//isPair function: compares 2 numbers and returns if same #s (t/f)
//

function isPair(roll1, roll2){
  return roll1 === roll2;
}

var rollSame = isPair(2,2);
console.log('Same number? ',rollSame);

//countPair function: returns the number of pairs in x dice rolls
//

function countPairs(x){
  var totalPairs = 0;
  for(var j = 0; j < x; j++){
   if(isPair(rollDie(), rollDie()));
      totalPairs++;
    }
  }
  return totalPairs;
}

var z;

z = countPairs(10000);
console.log(z);
