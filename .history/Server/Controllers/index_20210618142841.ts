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

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "Login", page: "login" });
}

export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", { title: "Register", page: "register" });
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

export function PostLoginController(
  req: Request,
  res: Response,
  next: NextFunction
) {}

export function PostRegisterController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // instantiate a new User Object
  let newUser = new User({
    username: req.body.username,
    email: req.body.emailAddress,
    displayName: req.body.FirstName + " " + req.body.LastName
  });

  User.create(newUser, req.body.password, (err) => {
    if (err) {
      console.error("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.error("Error: User Already Exists");
      }
      //req.flash("registerMessage", "Registration Error");

      return res.redirect("/register");
    }

    // after successful registration - login the user
    //   return passport.authenticate("local")(req, res, () => {
    //     return res.redirect("/clothing-list");
    //   });
    // });
  }
}
