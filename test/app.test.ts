import request from "supertest";
import app from "../src/app";

describe("API Utilisateurs", () => {
  it("✅ doit créer un utilisateur valide", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Alice", email: "alice@test.com" });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.name).toBe("Alice");
  });

  it("❌ doit refuser un utilisateur sans email", async () => {
    const res = await request(app).post("/users").send({ name: "Bob" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Nom et email requis");
  });

  it("❌ doit refuser un email invalide", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "Charlie", email: "not-an-email" });
    expect(res.status).toBe(400);
    expect(res.body.error).toBe("Email invalide");
  });

  it("✅ doit récupérer un utilisateur existant", async () => {
    const create = await request(app)
      .post("/users")
      .send({ name: "David", email: "david@test.com" });

    const res = await request(app).get(`/users/${create.body.id}`);
    expect(res.status).toBe(200);
    expect(res.body.name).toBe("David");
  });

  it("❌ doit renvoyer 404 si l’utilisateur n’existe pas", async () => {
    const res = await request(app).get("/users/999");
    expect(res.status).toBe(404);
    expect(res.body.error).toBe("Utilisateur non trouvé");
  });
});
