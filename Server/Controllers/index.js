"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayContactListPage = exports.PostMessageController = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const contacts_1 = __importDefault(require("../Models/contacts"));
function DisplayHomePage(req, res, next) {
    res.render("index", { title: "Home", page: "home" });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render("index", { title: "About Me", page: "about" });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render("index", { title: "My Projects", page: "projects" });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render("index", { title: "My Services", page: "services" });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render("./content/contact.ejs", { title: "Contact Me", page: "contact" });
}
exports.DisplayContactPage = DisplayContactPage;
function PostMessageController(req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;
}
exports.PostMessageController = PostMessageController;
function DisplayContactListPage(req, res, next) {
    contacts_1.default.find((err, contacts) => {
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
exports.DisplayContactListPage = DisplayContactListPage;
//# sourceMappingURL=index.js.map