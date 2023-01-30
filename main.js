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
let john2 = new Student("John", 30, "Computer Science");
let student2 = new Student("Bob", 35, "Psychology");
console.log(john2.greet());
// My name is John, I am studying Computer Science,I'm 30 years old
console.log(student2.greet());
// My name is Bob, I am studying Psychology, I'm 35 years old
console.log(john2); //object

//With Private:
class Circle1 {
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

const circle = new Circle1(10);
console.log(circle.area, "circle.area"); // 314.1592653589793
// console.log(circle.#radius); // Syntax error

//with polimorphism:  (Subtype polymorphism)
class Shape {
  area() {
    return 0;
  }
  perimeter() {
    return 0;
  }
  toString() {
    return Object.getPrototypeOf(this).constructor.name;
  }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.radius = r;
  }
  area() {
    return Math.PI * this.radius ** 2; //28.2
  }
  perimeter() {
    return Math.PI * this.radius * 2; //18.84
  }
}

class Rectangle extends Shape {
  constructor(w, h) {
    super();
    this.width = w;
    this.height = h;
  }
  area() {
    return this.width * this.height; //6
  }
  perimeter() {
    return 2 * (this.width + this.height); //10
  }
}

cumulateShapes = (shapes) => {
  return shapes.reduce((sum, shape) => {
    if (shape instanceof Shape) {
      console.log(`Shape: ${shape.toString()} - area: ${shape.area()}`);
      console.log(
        `Shape: ${shape.toString()} - perimeter: ${shape.perimeter()}`
      );
      return sum + shape.area();
    }
    throw Error("Bad argument shape.");
  }, 0);
};

const shapes = [new Circle(3), new Rectangle(2, 3)];

console.log(shapes);

cumulateShapes(shapes);

//with polimorphism (ad hoc):
const volumeCuboid = (length, breadth, height) => length * breadth * height;

const volumeCube = (length) => volumeCuboid(length, length, length);

// Overloading happens here
const calculateVolume = (...args) => {
  if (args.length === 3) return volumeCuboid(...args);
  return volumeCube(args[0]);
};

// args= [1,2,3]
// volumeCuboid= 6

// args= [3,2]




//With abstract:
class Shape2 {
  constructor() {
    if (this.constructor == Shape2) {
      throw new Error("some error");
    }
  }
  // abstract method
  // in this case it helps clarify that we will want to implement a subclass
  area() {
    throw new Error("Abstract Method has no implementation");
  }
 }

 class Circle2 extends Shape2 {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
 }
 class Square2 extends Shape2 {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side * this.side;
  }
 }
 
  
 const shape1=  new Shape2();
 console.log(shape1)

 const circle1=  new Circle2(4);
 console.log(circle1)

const square1=  new Square2(8);
 console.log(square1)