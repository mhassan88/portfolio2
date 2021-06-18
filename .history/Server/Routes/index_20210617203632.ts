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
  DisplayContactsPage,
  PostMessageController,
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
router.post("/contact", PostMessageController);

router.get("/contacts", DisplayContactsPage);
