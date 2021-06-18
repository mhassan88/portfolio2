"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandleCreateContact = exports.HandleEditContact = exports.HandleDeleteContact = exports.DisplayEditContactPage = exports.DisplayCreateContactPage = exports.DisplayContactListPage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
function DisplayContactListPage(req, res, next) {
    contacts_1.default.find((err, contacts) => {
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
}
exports.DisplayContactListPage = DisplayContactListPage;
function DisplayCreateContactPage(req, res, next) {
    res.render("index", {
        title: "Create",
        page: "update",
        data: "",
    });
}
exports.DisplayCreateContactPage = DisplayCreateContactPage;
function DisplayEditContactPage(req, res, next) {
    let id = req.params.id;
    contacts_1.default.findById(id, {}, {}, (err, ContactToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render("index", {
            title: "Edit",
            page: "update",
            data: ContactToEdit,
        });
    });
}
exports.DisplayEditContactPage = DisplayEditContactPage;
function HandleDeleteContact(req, res, next) {
    let id = req.params.id;
    contacts_1.default.remove({ _id: id }, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/contacts-list");
    });
}
exports.HandleDeleteContact = HandleDeleteContact;
function HandleEditContact(req, res, next) {
    let id = req.params.id;
    let updatedContact = new contacts_1.default({
        _id: id,
        contactName: req.body.name,
        emailAddress: req.body.email,
        phone: req.body.phone,
    });
    contacts_1.default.updateOne({ _id: id }, updatedContact, {}, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/contacts-list");
    });
}
exports.HandleEditContact = HandleEditContact;
function HandleCreateContact(req, res, next) {
    let newContact = new contacts_1.default({
        contactName: req.body.name,
        emailAddress: req.body.email,
        phone: req.body.phone,
    });
    contacts_1.default.create(newContact, (err) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.redirect("/contacts-list");
    });
}
exports.HandleCreateContact = HandleCreateContact;
//# sourceMappingURL=contacts.js.map