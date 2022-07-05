class Drink {
  constructor(name) {
    this.name = name
  }
  info() {
    return `this beverage is ${this.name}`
  }
  price() {
    if (this.name === "green tea") {
      return 8
    }
    return 10
  }
}

const tea = new Drink("black tea")
//console.log("hot drink:", tea.info())
//console.log("hot drink price:", tea.price())

function hotDrink(name, price) {
  this.name = name
  this.price = price
  this.info = function () {
    return `the hot drink is: ${this.name}`
  }
  this.price = function () {
    return `the price of beverage is: ${this.price}`
  }
}

const hotDrink2 = new hotDrink("coffee", 10)
//console.log(hotDrink2.info())


class coldDrink extends Drink{
  constructor(name, typeSeed) {
    super(name);
    this.seed = typeSeed;
  }

  typeOfSeed() {
    return `the type of your coffee is ${this.seed} `
  }

  
}

const cielitoLindo = new coldDrink("bubble taro", 'arabicca');
//console.log(cielitoLindo.typeOfSeed());
//console.log('name of brand is:', cielitoLindo.name);






