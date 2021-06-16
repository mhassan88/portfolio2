import { NextFunction } from "express";

export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "Home", page: "home" });
}
