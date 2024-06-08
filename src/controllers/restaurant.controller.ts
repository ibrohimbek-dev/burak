import { Request, Response } from "express";
import { T } from "../libs/types/common";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    res.send("Home Page!");
  } catch (err: any) {
    console.log("Error on Home Page:", err.message);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    res.send("Login Page!");
  } catch (err: any) {
    console.log("Error on Login Page:", err.message);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    res.send("Signup Page!");
  } catch (err: any) {
    console.log("Error on Signup Page:", err.message);
  }
};

export default restaurantController;
