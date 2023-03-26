import request from "supertest";
import { app } from "../../app";

it("returns a 400 when the email supplied does not exist", async () => {
  await request(app)
    .post("/api/users/signin")
    .send({ email: "agreatemail@google.com", password: "wererere" })
    .expect(400);
});

it("returns a 400 for wrong password", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "4340u0u0u" })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({ email: "test@test.com", password: "342304u230u402u" })
    .expect(400);
});

it("returns a cookie for valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({ email: "test@test.com", password: "password" })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({ email: "test@test.com", password: "password" })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
