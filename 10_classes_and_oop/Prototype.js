// let myName = "prashant     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.prashant = function(){
    console.log(`prashant is present in all objects`);
}

Array.prototype.heyPrashant = function(){
    console.log(`Prashant says hello`);
}

//heroPower.prashant()
//myHeros.prashant()
//myHeros.heyPrashant()
//heroPower.heyPrashant()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
"prashant".trueLength()
"iceTea".trueLength()

