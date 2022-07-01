//*funcion de primer orden

function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(12, 23);
console.log(res);

//*funcion de orden superior
function operation(fn, a, b) {
  console.log('se hace algo');
  console.log(fn(a,b));
}

operation(sum, 12, 20);

//*arrow function
let fA = function () {
  console.log('algo');
};

let fB = () => console.log('algo');

fA();
fB();


operation((a, b) => a * b, 5, 10);

operation((a, b) => {
  const c = a + b;
  return c * 2; 
}, 10, 3);