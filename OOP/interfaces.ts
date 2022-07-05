
interface Product{
  price: number;
  getPrice(): string;
}

class Coffee implements Product{
  price: number;
  getPrice(): string {
    return `Price of coffee is ${this.price}`;
  }
}

class Snack implements Product{
  price:number;
  name: string;

constructor(name: string, price: number ) {
  this.name = name;
  this.price = price;
}
  getPrice(): string {
    return `The price is ${this.price}`;
  }
}

const cacahates = new Snack('mafer sazonados', 45);

const products: Product[] = [
  new Snack('cacahuates', 10),
  new Snack('queso', 59),
  new Snack('papas de crema', 15),
];

function getPrices(items: Product[]) {
  for(const item of items) {
    console.log(`the price of  your product is: ${item.getPrice()}` );
  }
}

getPrices(products);

console.log('productos', products);