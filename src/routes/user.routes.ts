

import { Router } from "express";

const router = Router();

const users = [
    {
      id: 1,
      name: "Yogesh",
      email: "yogesh@example.com",
    },
    {
      id: 2,
      name: "Ram",
      email: "ram@example.com",
    },
];

//Get all users
router.get("/users", (req, res)=> {
    res.json (users);
});

export default router;

//Create new user
router.post("/user/new", (req, res)=> {
  const { name, email } = req.body;

  const newUser = {
    id : users.length + 1,
    name,
    email
  };

  users.push(newUser);

  res.status(201).json(newUser);
});

