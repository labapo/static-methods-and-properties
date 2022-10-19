class Govenor {
    static campaign (){
        console.log('Campaign for next term')
    }
    static createLaws (){
        console.log('Lets create these laws')
    }
    static passLaws () {
        console.log('Lets pass these laws')
    }
}
Govenor.campaign ();
Govenor.createLaws ();
Govenor.passLaws ();

class Person {
    constructor(name, age, job){
        this.name = name
        this.age = age
        this.job = job
    }
    //methods
    sayHiMethod(){
        console.log('Hello, friend!')
      }
    sayByeMethod(){
        console.log('Bye, friend!')
    }
    phoneAFriend(){
        console.log('Call you later!')
    }

}
//Create posteral worker class
class PostalWorker extends Person {
    greet () {
    console.log(this.name + ' Says ello!')
}
    deliverMail () {
        console.log('Here is your mail!')
    }
    pickUpMail () {
        console.log('Thanks for your mail!')

    }
}
//create chef class
class Chef extends Person {
    addSalt (){
        console.log('Let me add a little salt. It really does nothing, but I want to feel like I am in control')
    }
    yellAtServers (){
        console.log('Yell at young kids that are trying their best')
    }
}

//test postal worker
const person1 = new PostalWorker ('Lori', 35, 'Postal Worker');
console.log(person1);
person1.greet();
person1.deliverMail();
person1.pickUpMail();
person1.sayHiMethod();
person1.sayByeMethod();
person1.phoneAFriend();
const person2 = new PostalWorker ('Adam', 34, 'Postal Worker');
console.log(person2);

//test chef
const person3 = new Chef ('David Chang', 43, 'Chef');
const person4 = new Chef ('René Redzepi', 42, 'Chef');
console.log(person3);
console.log(person4);
person3.addSalt();
person3.yellAtServers();
person4.sayHiMethod();
person4.sayByeMethod();
person4.phoneAFriend ();
