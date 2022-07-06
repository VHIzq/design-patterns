
class Drinks{
  private _name: string
  constructor(name: string) {
    this._name = name;
  }

  info(): string{
    return this._name;
  }
}

const drink1 = new Drinks("coffee");
//console.log(drink1.info());

class coldDrink extends Drinks{
  constructor(name: string, sugar: boolean) {
    super(name);
    this.sugar = sugar
  }
}