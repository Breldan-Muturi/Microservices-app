import request from "supertest";
import { app } from "../../app";

it("returns a 201 on successful signup", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(201);
});

it("returns a 400 for invalid emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "testemail", password: "password" })
    .expect(400);
});

it("returns a 400 for invalid passwords", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "p" })
    .expect(400);
});

it("returns a 400 for missing email and password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com" })
    .expect(400);
  await request(app)
    .post("/api/users/signup")
    .send({ password: "p" })
    .expect(400);
});

it("returns a 400 for duplicate emails", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(201);
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(400);
});

it("returns a cookie on successful signup", async () => {
  const response = await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(201);
  expect(response.get("Set-Cookie")).toBeDefined();
});
