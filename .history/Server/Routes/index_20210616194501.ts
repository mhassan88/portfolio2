/*    index.ts
      Name: Muhammad Hassan 
      ID: 301178235
      Date: 03 June 2021
*/
import express from "express";
const router = express.Router();
import {
  DisplayAboutPage,
  DisplayContactPage,
  DisplayHomePage,
  DisplayProjectsPage,
  DisplayServicesPage,
} from "../Controllers";
export default router;

/* GET home page. */
router.get("/", DisplayHomePage);

/* GET home page. */
router.get("/home", DisplayHomePage);

/* GET about page. */
router.get("/about", DisplayAboutPage);

/* GET projects page. */
router.get("/projects", DisplayProjectsPage);

/* GET services page. */
router.get("/services", DisplayServicesPage);

/* GET contact page. */
router.get("/contact", DisplayContactPage);

/* Post message route for contact page */
router.post("/contact", function (req, res, next) {
  //got values, need to store to db or file at later stage
  let firstName: string = req.body.firstName;
  let lastName: string = req.body.lastName;
  let email: string = req.body.email;
  let phone: string = req.body.phone;
  let message: string = req.body.message;
});
