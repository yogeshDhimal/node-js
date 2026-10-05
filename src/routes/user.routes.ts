

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

//Get specific user
router.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => {
    return user.id === id;
  })

  if(! user) {
    return res.status(404).json({
      message : "User not found"
    });
  }

  res.json(user);
});


//Update specific user
router.put("/users/update/:id", (req, res) => {
  const id = Number(req.params.id);

  const { name, email } = req.body;

  const user = users.find((user) => {
    return user.id === id;
  });

  if(! user) {
    return res.status(404).json({
      message : "User not found"
    });
  }

  user.name = name;
  user.email = email;

  res.json({
    user,
    message : "Successsfully updated the user"
  });
});


//Delete specific user
router.delete("/users/delete/:id", (req, res) => {
  const id = Number(req.params.id);

  const userIndex = users.findIndex((user) => {
    return user.id === id;
  });

  if(userIndex === -1) {
    return res.status(404).json({
      message : "Usrr not found"
    });
  }

  const deletedUser = users.splice(userIndex, 1);

  res.json({
    deletedUser : deletedUser[0],
    status : "Success"
  })
})