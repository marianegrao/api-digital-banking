import { describe, expect, it } from "vitest";
import { User } from "../entities/user";
import { CreateUser } from "./create-user";

describe("Create User", () => {
  it("should be able to create a user account", () => {
    const dateBirth = new Date();
    dateBirth.setFullYear(dateBirth.getUTCFullYear() - 18);
    const createUser = new CreateUser();
    expect(
      createUser.excute({
        id: "unique id",
        name: "Jhon Doe",
        cpf: "0122",
        dateBirth,
        telephone: "12152",
        email: "email.com",
        password: "122",
      })
    ).resolves.toBeInstanceOf(User);
  });
});
