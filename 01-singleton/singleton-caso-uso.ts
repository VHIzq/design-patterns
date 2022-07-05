
class SingletonTS {
  private static instance: SingletonTS;
  public random: number;

  private constructor () {
    this.random = Math.random();
  };

  public static getInstance(): SingletonTS {
    if(!SingletonTS.instance) {
      this.instance = new SingletonTS();
    }
    return this.instance;
  }
}

//const singleton = new SingletonTS();

const singleton = SingletonTS.getInstance();
const singleton2 = SingletonTS.getInstance();

console.log(singleton.random);
console.log(singleton2.random);

console.log(singleton === singleton2);

singleton.random = 19;
console.log(singleton.random);
console.log(singleton2.random);

