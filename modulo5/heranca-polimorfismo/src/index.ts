import { User } from "./User";
import { Customer } from "./Customer";

//Exercício 1.

const newUser = new User("1", "user@user.com", "User", "user");

//a) Não seria possível pois ela está como private e nao existe um get para a password.

//b) Foi impressa apenas uma vez.

//Exercício 2.

const newCustomer = new Customer("2",
    "customer@customer.com",
    "Customer",
    "customer",
    "1234567"
)