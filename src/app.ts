import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

let users: { id: number; name: string; email: string }[] = [];
let idCounter = 1;

// Créer un utilisateur
app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Nom et email requis" });
  }
  if (!email.includes("@")) {
    return res.status(400).json({ error: "Email invalide" });
  }
  const user = { id: idCounter++, name, email };
  users.push(user);
  res.status(201).json(user);
});

// Récupérer un utilisateur
app.get("/users/:id", (req: Request, res: Response) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: "Utilisateur non trouvé" });
  }
  res.json(user);
});

// Lister tous les utilisateurs
app.get("/users", (_req: Request, res: Response) => {
  res.json(users);
});

// Supprimer un utilisateur
app.delete("/users/:id", (req: Request, res: Response) => {
  users = users.filter(u => u.id !== Number(req.params.id));
  res.status(204).send();
});

export default app;
