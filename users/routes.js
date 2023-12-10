import * as dao from "./dao.js";
// import { createRequire } from 'module';
// import express from "express";

function UserRoutes(app) {
  // var currentSignedInUser=null;
  const createUser = async (req, res) => {
    const user = await dao.createUser(req.body);
      res.json(user);
    };

  const deleteUser = async (req, res) => {
    const status = await dao.deleteUser(req.params.userId);
    res.json(status);
  };

  const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
  };

  const findUserById = async (req, res) => {
    const user = await dao.findUserById(req.params.userId);
    res.json(user);
  };

  const updateUser = async (req, res) => {
    const id = req.params.id;
    const newUser = req.body;
    const status = await dao.updateUser(id, newUser);
    const currentUser = await dao.findUserById(id);
    req.session["currentUser"] = currentUser;
    res.json(status);
  };

  const signup = async (req, res) => {
    const user = await dao.findUserByUsername(
      req.body.username);
    if (user) {
      res.status(400).json(
        { message: "Username already taken" });
    }
    const currentUser = await dao.createUser(req.body);
    req.session['currentUser'] = currentUser;
    res.json(currentUser);
  };

  const signin = async (req, res) => {
    const { username, password } = req.body;
    const user = await dao.findUserByCredentials(username, password);
    console.log(user);
    if (user) {
      const currentUser = user;
      console.log(currentUser);
      req.session["currentUser"] = currentUser;
      res.json(user);
    } else {
      res.sendStatus(403);
    }
  };

  const signout = (req, res) => {
    console.log("signin outt");
    req.session.destroy();
    // app.get("/system/reboot", (req, res)=> {
    //   console.log("here you are");
    //   process.exit(1)
    // })
    console.log(req.account);
    res.json(200);
  };

  const account = async (req, res) => {
    // console.log("added to the session", req.session['currentUser']);
    // console.log("global variable is ", currentSignedInUser);
    res.json(req.session['currentUser']);
  };

  app.post("/api/users", createUser);
  app.get("/api/users", findAllUsers);
  app.get("/api/users/:userId", findUserById);
  app.put("/api/users/:userId", updateUser);
  app.delete("/api/users/:userId", deleteUser);
  app.post("/api/users/signup", signup);
  app.post("/api/users/signin", signin);
  app.post("/api/users/signout", signout);
  app.post("/api/users/account", account);
}

export default UserRoutes;