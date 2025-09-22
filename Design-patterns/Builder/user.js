class User {
  constructor(name, email, age, address) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = address;
  }
}
class UserBuilder {
  setName(name) {
    this.name = name;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setAddress(address) {
    this.address = address;
    return this;
  }

  build() {
    return new User(this.name, this.email, this.age, this.address);
  }
}

const user = new UserBuilder()
  .setName("Gustavo")
  .setEmail("gustavopgb21@gmail.com")
  .setAge("25")
  .setAddress("Av. Blanco Galindo")
  .build();

console.log(user);
