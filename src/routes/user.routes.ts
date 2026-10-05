

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