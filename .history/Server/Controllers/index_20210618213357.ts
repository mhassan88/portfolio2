import { Request, Response, NextFunction } from "express";
import passport from "passport";
import User from "../Models/user";
import { UserDisplayName } from "../Utils";

//Display Controller functions
export function DisplayHomePage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", {
    title: "Home",
    page: "home",
    displayName: UserDisplayName(req),
  });
}

export function DisplayAboutPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", {
    title: "About Me",
    page: "about",
    displayName: UserDisplayName(req),
  });
}
export function DisplayProjectsPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", {
    title: "My Projects",
    page: "projects",
    displayName: UserDisplayName(req),
  });
}
export function DisplayServicesPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", {
    title: "My Services",
    page: "services",
    displayName: UserDisplayName(req),
  });
}
export function DisplayContactPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("./content/contact.ejs", {
    title: "Contact Me",
    page: "contact",
    displayName: UserDisplayName(req),
  });
}

export function DisplayLoginPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.user) {
    return res.render("index", {
      title: "Login",
      page: "login",
      messages: req.flash("loginMessage"),
      displayName: UserDisplayName(req),
    });
  }
  return res.redirect("/contacts-list");
}

export function DisplayRegisterPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.render("index", {
    title: "Register",
    page: "register",
    messages: req.flash("registerMessage"),
    displayName: UserDisplayName(req),
  });
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
) {
  passport.authenticate("local", (err, user, info) => {
    // are there any server errors?
    if (err) {
      console.error(err);
      return next(err);
    }

    // are there any login errors?
    if (!user) {
      req.flash("loginMessage", "Authentication Error");
      return res.redirect("/login");
    }

    req.login(user, (err) => {
      // are there db errors?
      if (err) {
        console.error(err);
        return next(err);
      }

      return res.redirect("/contacts-list");
    });
  })(req, res, next);
}

export function PostRegisterController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // instantiate a new User Object
  let newUser = new User({
    username: req.body.username,
    email: req.body.emailAddress,
    displayName: req.body.FirstName + " " + req.body.LastName,
  });

  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.error("Error: Inserting New User");
      if (err.name == "UserExistsError") {
        console.error("Error: User Already Exists");
      }
      req.flash("registerMessage", "Registration Error");

      return res.redirect("/register");
    }

    //after successful registration - login the user
    return passport.authenticate("local")(req, res, () => {
      return res.redirect("/contacts-list");
    });
  });
}

export function LogoutController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.logout();

  res.redirect("/login");
}
