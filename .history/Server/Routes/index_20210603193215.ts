import express from "express";
const router = express.Router();
export default router;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home", page: "home" });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", { title: "Home", page: "home" });
});

/* GET about page. */
router.get("/about", function (req, res, next) {
  res.render("index", { title: "About Us", page: "about" });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("index", { title: "Our Projects", page: "projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("index", { title: "Our Services", page: "services" });
});

/* GET contact page. */
router.get("/contact", function (req, res, next) {
  res.render("index", { title: "Contact Us", page: "contact" });
});
/* Post message via contact page */
router.post("/contact", function (req, res, next) {
  let firstName: string = req.body.firstName;
  let lastName: string = req.body.lastName;
  let email: string = req.body.email;
  let phone: string = req.body.phone;
  let message: string = req.body.message;
});
