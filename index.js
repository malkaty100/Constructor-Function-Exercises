///ex1
function Phone(brand, model){
    this.brand=brand
    this.model=model
    this.details=function(){console.log(`Phone:${brand} ${model}`);
    }
}
new Phone("samsong",2021).details()
//ex2
function Rectangle(width,height){
    this.width=width
    this.height=height
}
Rectangle.prototype.area=function(){return this.width*this.height}
console.log(new Rectangle(5,4).area());
//ex3
function BankAccount(owner,balance) {
   
        this.owner=owner
        this.balance=balance
}
   BankAccount.prototype.deposit=function(amount){
        this.balance+=amount
    }
    BankAccount.prototype.withdraw=function(amount){
        if(amount<=this.balance)
            this.balance-=amount
    }
    BankAccount.prototype.checkBalance=function(){
        console.log(this.balance);
        
    }
   const b=new BankAccount("ll",1000)
   b.deposit(500)
   b.withdraw(200)
   b.checkBalance()
   //ex4
   function Animal1(name){
    this.name=name
    this.speak=function(){
        console.log("sound");
        
    }
   }
   function Dog1(name){
    this.name=name
    this.bark=function(){console.log(`${name} barks`);
    }
   }
   Object.setPrototypeOf(Dog1.prototype,Animal1.prototype)
   new Dog1("rocky").bark()
   //ex5
   function Vehicle(type){
    this.type=type
   

   }
   Vehicle.prototype.describe=function(){
        console.log(`this is a ${this.type}`);
        
    }
   function Car(type,brand){
    this.type=type
    this.brand=brand
    this.info=function(){
        console.log(`this is a ${brand} ${type}`);
        
    }
    
   }
      Object.setPrototypeOf(Car.prototype,Vehicle.prototype)
   const c=new Car("car","bmw")
   c.describe()
   c.info()
   //ex6
   function Shape(){
    this.area=function(){return 0}
   } 
   function Circle(radius){
    this.radius=radius
    this.area=function(){return (radius**2)*Math.PI}
   }
   function Square(side){
    this.side=side
    this.area=function(){return side**2}
   } 
      Object.setPrototypeOf(Circle.prototype,Shape.prototype)
      Object.setPrototypeOf(Square.prototype,Shape.prototype)

      console.log(new Circle(3).area());
      console.log(new Square(4).area());
///ex7
class  Book
{
constructor(title, author){
    this.title=title
    this.author=author
}
info(){console.log(`${this.title} by ${this.author}`)}

}
new Book("lll","kkkk").info()
//ex8
class Person{
    constructor(name){
        this.name=name
    }
    greet(){console.log(`hello! I'm ${this.name}`);
    }
}
class Student extends Person{
    constructor(name, school){
     super(name)
     this.school=school
    }
    study(){console.log(`${this.name} is studying at ${this.school}`);
    }
}
const s=new Student("Alice","oxford")
s.greet()
s.study()
///ex9
class Employee {
    #salary
    constructor(salary){
        this.#salary=salary
    }
    getSalary(){return this.#salary}
    work(){console.log('employee is working');
    }
}
class Manager extends Employee{
    constructor(salary){
        super(salary)
    }
    work(){console.log( 'manager is managing');
   }
}
const e=new Employee(4000)
console.log( e.getSalary());

e.work()
const m=new Manager(5000)
console.log( m.getSalary());
m.work()