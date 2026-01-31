

// class Person {
//     eat() {
//         console.log("Person is eating");
//     }

//     sleep() {
//         console.log("Person is sleeping");
//     }
// }

// let obj1 = new Person();
// obj1.eat();
// obj1.sleep();


// Using this keyword
// class Person {
//     constructor(name,age)
//     {
//         this.name = name;
//         this.age = age;
//     }
//     displayData()
//     {
//         console.log("name = ",this.name);
//         console.log("age = ",this.age);
//     }
// }

// let o1 = new Person("Buddha", 21);
// o1.displayData();

// inheritence

// class Animal{

//     leg = 4;
//     head = 1;

//     run()
//     {
//         console.log("animal can run");
//     }

// }

// class Camel extends Animal {

//     display()
//     {
        // console.log("camel has ",this.leg + " legs");
        // console.log("camel has ",this.head + " head");
    //     super.run();
    //     let s = `camel has ${this.leg} legs and ${this.head} head`;
    //     console.log(s);
    // }
// }
// let camel1 = new Camel();
// camel1.display();


// super keyword

class Student{
    constructor(name,age)
    {
        this.name = name;
        this.age = age;
    }
    display()
    {
        console.log("name = ",this.name);
        console.log("age = ",this.age);
    }
}

class Teacher extends Student{
    constructor(name,age,salary)
    {
        super(name,age);
        this.salary = salary;
    }
    display()
    {
        super.display();
        console.log("salary = ",this.salary);
    }
}
let t1 = new Teacher("Buddha",21,25000);
t1.display();