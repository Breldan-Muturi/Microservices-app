import request from "supertest";
import { app } from "../../app";

it("returns the current user for valid credentials", async () => {
  const cookie = await global.authenticatedRequest();

  const currentUserResponse = await request(app)
    .get("/api/users/currentuser")
    .set("Cookie", cookie)
    .send()
    .expect(200);

  expect(currentUserResponse.body.currentUser.email).toEqual("test@test.com");
});

it("returns null for unauthenticated users", async () => {
  const response = await request(app)
    .get("/api/users/currentuser")
    .send()
    .expect(200);

  expect(response.body.currentUser).toEqual(null);
});
