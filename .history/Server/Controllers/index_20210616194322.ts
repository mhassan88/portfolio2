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
export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "My Projects", page: "projects" });
}
export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "My Services", page: "services" });
}
export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("./content/contact.ejs", { title: "Contact Me", page: "contact" });
}
