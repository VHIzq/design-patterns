const fruitsNames = ['Pinneapple', 'Watermelon', 'Strawberries'];
//*forEach
fruitsNames.forEach(name => console.log(name.toUpperCase()));

//*map es un metodo inmutable
const nameUpper = fruitsNames.map((name) => name.toLocaleLowerCase())
console.log(nameUpper);
console.log(fruitsNames);


//*reduce
const numbers = [19, 23, 34, 1];

const total = numbers
    .reduce((acc, number) => acc + number
, 0)

console.log('total', total);