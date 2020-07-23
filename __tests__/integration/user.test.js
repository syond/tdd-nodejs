import request from "supertest";
import app from "../../src/app.js";

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
  });

  it("should create new user", async () => {
    const response = await request(app).post("/users").send(users[0]);

    expect(response.body).toHaveProperty('name');
  });
  
  it("should return status 201 when create new user", async () => {
    const response = await request(app).post('/users').send(users[0]);

    expect(response.status).toBe(201);
  });
});
