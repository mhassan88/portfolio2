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
function DisplayCreateContactPage(req, res, next) { }
exports.DisplayCreateContactPage = DisplayCreateContactPage;
function DisplayEditContactPage(req, res, next) { }
exports.DisplayEditContactPage = DisplayEditContactPage;
function HandleDeleteContact(req, res, next) { }
exports.HandleDeleteContact = HandleDeleteContact;
function HandleEditContact(req, res, next) { }
exports.HandleEditContact = HandleEditContact;
function HandleCreateContact(req, res, next) { }
exports.HandleCreateContact = HandleCreateContact;
//# sourceMappingURL=contacts.js.map