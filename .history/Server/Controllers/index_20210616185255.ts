import { Request, Response, NextFunction } from "express";

//Display Controller functions
export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "Home", page: "home" });
}

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "About Me", page: "about" });
}
