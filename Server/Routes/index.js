"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
router.get("/", function (req, res, next) {
    res.render("index", { title: "Home", page: "home" });
});
router.get("/home", function (req, res, next) {
    res.render("index", { title: "Home", page: "home" });
});
router.get("/about", function (req, res, next) {
    res.render("index", { title: "About Me", page: "about" });
});
router.get("/projects", function (req, res, next) {
    res.render("index", { title: "My Projects", page: "projects" });
});
router.get("/services", function (req, res, next) {
    res.render("index", { title: "My Services", page: "services" });
});
router.get("/contact", function (req, res, next) {
    res.render("./content/contact.ejs", { title: "Contact Me", page: "contact" });
});
router.post("/contact", function (req, res, next) {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let phone = req.body.phone;
    let message = req.body.message;
});
//# sourceMappingURL=index.js.map