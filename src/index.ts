// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// }

// const person = {
//   name: "ISUNG",
//   age: 24,
//   gender: "female"
// }

class Human {
  public name: string;
  public age: number;
  public gender: string;
  // 클래스가 시작할 때마다 호출
  // 클래스로부터 객체(object)를 만들 때마다
  constructor(name: string, age: number, gender: string){ 
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female")

const sayHi = (person: Human): string => {
  return (`Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`);
}

console.log(sayHi(lynn));

export { };