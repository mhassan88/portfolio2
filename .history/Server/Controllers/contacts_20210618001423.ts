import { Request, Response, NextFunction } from "express";
import Contact from "../Models/contacts";

export function DisplayCreateContactPage(
  req: Request,
  res: Response,
  next: NextFunction
) {}

//Display contact list page
export function DisplayContactListPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  Contact.find((err, contacts) => {
    if (err) {
      console.error("Error occurred");
      res.end(err);
    }
    res.render("index", {
      title: "List of Contacts",
      page: "contacts",
      contactList: contacts,
    });
  });

  // let newContact = new User({
  //   name: "Muhammad Hassan",
  //   email: "m.hassan.88@outlook.com",
  //   contactNo: "647-390-3271",
  // });
  // User.create(newContact, (err) => {
  //   if (err) {
  //     console.error(err);
  //     res.end(err);
  //   }
  //   res.redirect("/about");
  // });
  // User.find({}, {}, {}, (err, users) => {
  //   res.send(users);
  // });
}

//Display edit contact page
export function DisplayEditContactPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  Contact.find((err, contacts) => {
    if (err) {
      console.error("Error occurred");
      res.end(err);
    }
    res.render("index", {
      title: "Contacts List",
      page: "contacts",
      contactList: contacts,
    });
  });
}

//Handle Delete Contact
export function HandleDeleteContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  Contact.find((err, contacts) => {
    if (err) {
      console.error("Error occurred");
      res.end(err);
    }
    res.render("index", {
      title: "Contacts List",
      page: "contacts",
      contactList: contacts,
    });
  });
}

//Handle /contact-list/edit/:id
export function HandleEditContact(
  req: Request,
  res: Response,
  next: NextFunction
) {}

//Handle /contact-list/delete/:id
export function HandleDeleteContact(
  req: Request,
  res: Response,
  next: NextFunction
) {}
