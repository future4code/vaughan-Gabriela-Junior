import { User } from "./User";
import { Customer } from "./Customer";

// Exercício 1.

const newUser = new User("1", "user@user.com", "User", "user");

// a) Não seria possível pois ela está como private e nao existe um get para a password.

// b) Foi impressa apenas uma vez.

// Exercício 2.

const newCustomer = new Customer("2",
    "customer@customer.com",
    "Customer",
    "customer",
    "1234567"
)

// a) Foi impressa apenas uma vez.
// b) Foi chamada duas vezes, pois tem o primeiro newUser e depois ela tá atrelada ao Costumer.

// Exercício 3.

console.log(newUser.getId());
console.log(newUser.getEmail());
console.log(newUser.getName());
console.log(newCustomer.purchaseTotal);
console.log(newCustomer.getCreditCard());


// a) Não, porque é privada e não tem um get publico.

// Exercício 4.
newCustomer.introduceYourself();