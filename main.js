//With constructor:
function StudentPerson(name, age) {
  this.name = name;
  this.age = age;
}
let john = new StudentPerson("John", 30);
let joe = new StudentPerson("Joe", 25);
console.log(john.name); 
console.log(john.age); 


//With regular function:
function student(name, age) {
  console.log(name);
  console.log(age);
}
student("John", 30);


//With static:
class ClassWithStaticMethodIntro {
  static staticProperty = "someValue";
  static staticMethod() {
    return "static method has been called.";
  }
 }
 console.log(ClassWithStaticMethodIntro.staticProperty); //working
 // Expected output: "someValue"
 console.log(ClassWithStaticMethodIntro.staticMethod());
 // Expected output: "static method has been called."
 const instance1 = new ClassWithStaticMethodIntro();
 console.log(instance1.staticProperty); //not working
// console.log(instance1.staticMethod()); 


//With Inheritance:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  introduce() {
    return "My name is " + this.name;
  }
}
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  greet() {
    return `${this.introduce()}, I am studying ${this.major},
    I'm ${this.age} years old`;
  }
}
let john = new Student("John", 30, "Computer Science");
let student2 = new Student("Bob", 35, "Psychology");
console.log(john.greet());
// My name is John, I am studying Computer Science,I'm 30 years old
console.log(student2.greet());
// My name is Bob, I am studying Psychology, I'm 35 years old
console.log(john); //object


//With Private:
class Circle {
  // a private field
  #radius;
  constructor(value) {
    // You can access private field from constructor
    this.#radius = value;
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
 }

const circle = new Circle(10);
console.log(circle.area, "circle.area"); // 314.1592653589793
// console.log(circle.#radius); // Syntax error
