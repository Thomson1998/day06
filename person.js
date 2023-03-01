//Write a “person” class to hold all the details.

class person {
    constructor(firstname, lastname, age, email, city, state, country, pincode, mobilenumber){
       this.firstname = firstname
       this.lastname = lastname
       this.age = age
       this.email = email
       this.city = city
       this.state = state
       this.country = country
       this.pincode = pincode
       this.mobilenumber = mobilenumber
    }
    getpersonfirstname(){
        console.log(`First Name: ${this.firstname}`)
    } 
    getpersonlastname(){
        console.log(`Last Name: ${this.lastname}`)
    }
    getage(){
        console.log(`Age: ${this.age}`)
    }
    getemail(){
        console.log(`Email ID: ${this.email}`)
    }
    getcity(){
        console.log(`City: ${this.city}`)
    }
    getstate(){
        console.log(`State: ${this.state}`)
    }
    getcountry(){
        console.log(`Country: ${this.country}`)
    }
    getpincode(){
        console.log(`Pincode: ${this.pincode}`)
    }
    getmobilenumber(){
        console.log(`Mobile Number: ${this.mobilenumber}`)
    }
}

var Thomson = new person('Thomson', 'M', 24, 'abcde@fghij.com', 'Chennai', 'Tamilnadu', 'India', 600002, 9876543210)

// To Access 
Thomson.getpersonfirstname()
Thomson.getpersonlastname()
Thomson.getage()
Thomson.getemail()
Thomson.getcity()
Thomson.getstate()
Thomson.getcountry()
Thomson.getpincode()
Thomson.getmobilenumber()