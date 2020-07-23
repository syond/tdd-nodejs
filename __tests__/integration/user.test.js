import request from "supertest";
import app from "../../src/app.js";
import database from "../../src/database";

let users;

describe("Users tests", () => {
  beforeEach(() => {
    users = [
      {
        name: "Fernando Lopes",
        age: "22",
        email: "fernando.lopes@tdd.com",
      },
      {
        name: "Adriana Lisboa",
        age: "27",
        email: "adriana.lisboa@tdd.com",
      },
    ];

    database = [];
  });

  it("should create new user", async () => {
    const response = await request(app).post("/users").send(users[0]);

    expect(response.body).toHaveProperty("name");
  });

  it("should return status 201 when create new user", async () => {
    const response = await request(app).post("/users").send(users[0]);

    expect(response.status).toBe(201);
  });

  it("should not create new user with same email", async () => {
    await request(app)
      .post("/users")
      .send({ ...users[0], name: "Adriano Souza" });

    const response = await request(app).post("/users").send(users[0]);

    expect(response.status).toBe(400);
  });

  it("should update user", async () => {
    //TODO
  });

  it("should not update user witch not exist", async () => {
    //TODO
  });

  it("should delete user", async () => {
    //TODO
  });

  it("should return status 204 when delete user", async () => {
    //TODO
  });

  it("should not delete user witch not exist", async () => {
    //TODO
  });
});
