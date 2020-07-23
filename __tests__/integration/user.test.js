import request from "supertest";
import app from "../../src/app.js";
import database from "../../src/database";

let users;

describe("Users tests", () => {
  beforeEach(() => {
    users = [
      {
        id: 1,
        name: "Fernando Lopes",
        age: "22",
        email: "fernando.lopes@tdd.com",
      },
      {
        id: 2,
        name: "Adriana Lisboa",
        age: "27",
        email: "adriana.lisboa@tdd.com",
      },
    ];

    database = [];
  });

  it("should be able to create new user", async () => {
    const response = await request(app).post("/users").send(users[0]);

    expect(response.body).toHaveProperty("name");
  });

  it("should be able to return status 201 when create new user", async () => {
    const response = await request(app).post("/users").send(users[0]);

    expect(response.status).toBe(201);
  });

  it("should not be able to create new user with same email", async () => {
    await request(app)
      .post("/users")
      .send({ ...users[0], name: "Adriano Souza" });

    const response = await request(app).post("/users").send(users[0]);

    expect(response.status).toBe(400);
  });

  it("should be able to list all the users", async () => {
    await request(app).post("/users").send(users[0]);

    const response = await request(app).get("/users");

    expect(response.body).toHaveLength(1);
  });

  it("should be able to update user passing valid ID", async () => {
    const user = await request(app).post('/users').send(users[0]);

    const updateUser = {
      ...user.body,
      name: "Robervaldo",
    }

    const response = await request(app).patch(`/users/${updateUser.id}`).send(updateUser);

    expect(response.body).toMatchObject(updateUser);
  });

  it("should not be able to update user witch not exist", async () => {
    const user = await request(app).post('/users').send(users[0]);

    const updateUser = {
      ...user.body,
      id: 5,
      name: "Robervaldo",
    }

    const response = await request(app).patch(`/users/${updateUser.id}`).send(updateUser);

    expect(response.status).toBe(400);
  });

  it("should be able to delete user", async () => {
    await request(app).post('/users').send(users[0]);
    await request(app).post('/users').send(users[0]);
    const user = await request(app).post('/users').send(users[1]);

    const response = await request(app).delete(`/users/${user.body.id}`).send(user.body);

    expect(response.status).toBe(200);
  });

  it("should not be able to delete user witch not exist", async () => {
    const response = await request(app).delete('/users/51651');

    expect(response.status).toBe(400);
  });
});
