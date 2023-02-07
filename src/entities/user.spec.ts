import { expect, test } from "vitest";
import { User } from "./user";

test("create a user", () => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getUTCFullYear() - 18);
  const user = new User({
    id: "unique id",
    name: "Jhon Doe",
    cpf: "0122",
    dateBirth: currentDate,
    telephone: "12152",
    email: "email.com",
    password: "122",
  });

  expect(user).toBeInstanceOf(User);
});

test("cannot create a user with minimum age less than 18 years old", () => {
  const currentDate = new Date();
  expect(() => {
    return new User({
      id: "unique id",
      name: "Jhon Doe",
      cpf: "0122",
      dateBirth: new Date(),
      telephone: "12152",
      email: "email.com",
      password: "122",
    });
  }).toThrow();
});
