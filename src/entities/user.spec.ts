import { expect, test } from "vitest";
import { User } from "./user";

test("create a user", () => {
  const dateBirth = new Date();
  dateBirth.setFullYear(dateBirth.getUTCFullYear() - 18);
  const user = new User({
    id: "unique id",
    name: "Jhon Doe",
    cpf: "0122",
    dateBirth,
    telephone: "12152",
    email: "email.com",
    password: "122",
  });

  expect(user).toBeInstanceOf(User);
});

test("cannot create a user with minimum age less than 18 years old", () => {
  expect(() => {
    return new User({
      id: "unique id",
      name: "Jhon Doee",
      cpf: "0122",
      dateBirth: new Date(),
      telephone: "12152",
      email: "email.com",
      password: "122",
    });
  }).toThrow();
});
