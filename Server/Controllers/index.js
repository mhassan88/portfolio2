"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogoutController = exports.PostRegisterController = exports.PostLoginController = exports.PostMessageController = exports.DisplayRegisterPage = exports.DisplayLoginPage = exports.DisplayContactPage = exports.DisplayServicesPage = exports.DisplayProjectsPage = exports.DisplayAboutPage = exports.DisplayHomePage = void 0;
const passport_1 = __importDefault(require("passport"));
const user_1 = __importDefault(require("../Models/user"));
const Utils_1 = require("../Utils");
function DisplayHomePage(req, res, next) {
    res.render("index", {
        title: "Home",
        page: "home",
        displayName: Utils_1.UserDisplayName(req),
    });
}
exports.DisplayHomePage = DisplayHomePage;
function DisplayAboutPage(req, res, next) {
    res.render("index", {
        title: "About Me",
        page: "about",
        displayName: Utils_1.UserDisplayName(req),
    });
}
exports.DisplayAboutPage = DisplayAboutPage;
function DisplayProjectsPage(req, res, next) {
    res.render("index", {
        title: "My Projects",
        page: "projects",
        displayName: Utils_1.UserDisplayName(req),
    });
}
exports.DisplayProjectsPage = DisplayProjectsPage;
function DisplayServicesPage(req, res, next) {
    res.render("index", {
        title: "My Services",
        page: "services",
        displayName: Utils_1.UserDisplayName(req),
    });
}
exports.DisplayServicesPage = DisplayServicesPage;
function DisplayContactPage(req, res, next) {
    res.render("./content/contact.ejs", {
        title: "Contact Me",
        page: "contact",
        displayName: Utils_1.UserDisplayName(req),
    });
}
exports.DisplayContactPage = DisplayContactPage;
function DisplayLoginPage(req, res, next) {
    res.render("index", {
        title: "Login",
        page: "login",
        messages: req.flash("loginMessage"),
        displayName: Utils_1.UserDisplayName(req),
    });
}
exports.DisplayLoginPage = DisplayLoginPage;
function DisplayRegisterPage(req, res, next) {
    res.render("index", {
        title: "Register",
        page: "register",
        messages: req.flash("registerMessage"),
        displayName: Utils_1.UserDisplayName(req),
    });
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
function PostLoginController(req, res, next) {
    passport_1.default.authenticate("local", (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (!user) {
            req.flash("loginMessage", "Authentication Error");
            return res.redirect("/login");
        }
        req.login(user, (err) => {
            if (err) {
                console.error(err);
                return next(err);
            }
            return res.redirect("/contacts-list");
        });
    })(req, res, next);
}
exports.PostLoginController = PostLoginController;
function PostRegisterController(req, res, next) {
    let newUser = new user_1.default({
        username: req.body.username,
        email: req.body.emailAddress,
        displayName: req.body.FirstName + " " + req.body.LastName,
    });
    user_1.default.register(newUser, req.body.password, (err) => {
        if (err) {
            console.error("Error: Inserting New User");
            if (err.name == "UserExistsError") {
                console.error("Error: User Already Exists");
            }
            req.flash("registerMessage", "Registration Error");
            return res.redirect("/register");
        }
        return passport_1.default.authenticate("local")(req, res, () => {
            return res.redirect("/contacts-list");
        });
    });
}
exports.PostRegisterController = PostRegisterController;
function LogoutController(req, res, next) {
    req.logout();
    res.redirect("/login");
}
exports.LogoutController = LogoutController;
//# sourceMappingURL=index.js.map