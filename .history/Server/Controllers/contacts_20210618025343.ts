import { Request, Response, NextFunction } from "express";
import Contact from "../Models/contacts";

//Display contact list page (Read in CRUD)
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

// Display (C)reate contact page
export function DisplayCreateContactPage(
  req: Request,
  res: Response,
  next: NextFunction
) {}

//Display (E)dit contact page
export function DisplayEditContactPage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let id = req.params.id;

  // pass the id to the db

  // db.Contact.find({"_id": id})

  Contact.findById(id, {}, {}, (err, ContactToEdit) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    // show the edit view
    res.render("index", {
      title: "Edit",
      page: "update",
      data: ContactToEdit,
      // displayName: UserDisplayName(req),
    });
  });
}

//Process (D)elete Contact
export function HandleDeleteContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.redirect("/contacts-list");
}

//Process edit contact
export function HandleEditContact(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let id = req.params.id;

  // instantiate a new Contact Item
  let updatedContact = new Contact({
    _id: id,
    name: req.body.name,
    emailAddress: req.body.email,
    phone: req.body.phone,
  });

  // find the Contact item via db.contacts.update({"_id":id}) and then update
  Contact.updateOne({ _id: id }, updatedContact, {}, (err) => {
    if (err) {
      console.error(err);
      res.end(err);
    }

    res.redirect("/contacts-list");
  });
}

//Process create contact
export function HandleCreateContact(
  req: Request,
  res: Response,
  next: NextFunction
) {}
