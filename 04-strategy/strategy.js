class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
};

class RegularSalesStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + (amount * this.tax);
  }
};

class PremiumSaleStrategy {
  constructor(rate) {
    this.rate = rate;
  }

  calculate(amount) {
    return amount + (amount + this.rate);
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }
  
  calculate(amount) {
    return amount + (amount * this.tax) - this.discount;
  }
}

class ForeignSaleStrategy {
  getDollarsPrice() {
    return 20;
  }

  calculate(amount) {
    return amount * this.getDollarsPrice();
  }
}

const regularSale = new RegularSalesStrategy(0.16);
const premiumSale = new PremiumSaleStrategy(12);
const discountSale = new DiscountSaleStrategy(0.16, 2.5);
const foreignSale = new ForeignSaleStrategy();

const sale = new SaleContext(regularSale);
const newPremiumSale = new SaleContext(premiumSale);

console.log( 'regular sale', sale.calculate(10));
console.log("premium sale", newPremiumSale.calculate(20));


sale.setStrategy(discountSale);
console.log( 'discount sale', sale.calculate(10));

sale.setStrategy(foreignSale);

console.log('foreign sale', sale.calculate(10));