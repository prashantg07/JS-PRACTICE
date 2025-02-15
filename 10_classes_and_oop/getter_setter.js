class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}prashant`
    }

    set password(value){
        this._password = value
    }
}

const prashant = new User("p@prashant.ai", "abc")
console.log(prashant.password);