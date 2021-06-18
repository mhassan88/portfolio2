"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRegisterController = exports.PostLoginController = exports.PostMessageController = exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
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
function DisplayLoginPage(req, res, next) {
    res.render("index", { title: "Login", page: "login" });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render("index", { title: "Register", page: "register" });
}
exports.DisplayRegisterPage = DisplayRegisterPage;
function PostMessageController(req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;
}
exports.PostMessageController = PostMessageController;
function PostLoginController(req, res, next) { }
exports.PostLoginController = PostLoginController;
function PostRegisterController(req, res, next) { }
exports.PostRegisterController = PostRegisterController;
//# sourceMappingURL=index.js.map