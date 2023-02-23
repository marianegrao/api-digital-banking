import { describe, expect, it, test } from "vitest";
import { CreateUser } from "./CreateUser";

describe("Create User", () => {
  it("cannot create a user with minimum age less than 18 years old", async () => {
    const createuser = new CreateUser({ create: async (data) => {} });
    await expect(
      createuser.execute({
        name: "Jhon Doee",
        cpf: "0122",
        dateBirth: new Date(),
        telephone: "12152",
        email: "email.com",
        password: "122",
      })
    ).resolves.toThrow();
  });

  it("should be able to create a user account", async () => {
    const dateBirth = new Date();
    dateBirth.setFullYear(dateBirth.getUTCFullYear() - 18);
    const createuser = new CreateUser({ create: async (data) => {} });
    await expect(
      createuser.execute({
        name: "Jhon Doee",
        cpf: "0122",
        dateBirth,
        telephone: "12152",
        email: "email.com",
        password: "122",
      })
    ).resolves.not.toThrow();
  });
});
