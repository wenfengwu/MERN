const express = require("express")
var faker = require("faker");
const app = express();
const port = 8000;

class User{
    constructor(){
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company{
    constructor(){
        this._id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = new Address();
    }
}

class Address{
    constructor(){
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country();
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
  });
  
  app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
  });

  app.get("/api/user/company", (req, res) => {
    let information = [new User, new Company()]
    res.json(information);
  });
  
  const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
  );