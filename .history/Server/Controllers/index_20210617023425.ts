import { Request, Response, NextFunction } from "express";
import User from "../Models/user";

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

export function PostMessageController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //got values, need to store to db or file at later stage
  let firstName: string = req.body.firstName;
  let lastName: string = req.body.lastName;
  let email: string = req.body.email;
  let phone: string = req.body.phone;
  let message: string = req.body.message;
}
export function DisplayTestPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let newContact = new User({
    name: "Muhammad Hassan",
    email: "m.hassan.88@outlook.com",
    contactNo: "647-390-3271",
  });
  User.create(newContact, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }
    res.redirect("/about");
  });
  // User.find({}, {}, {}, (err, users) => {
  //   res.send(users);
  // });
}
