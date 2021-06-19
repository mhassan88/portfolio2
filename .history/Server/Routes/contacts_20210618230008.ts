/*    contacts.ts
      Name: Muhammad Hassan 
      ID: 301178235
      Date: 18 June 2021
      */
import { Router } from "express";
import {
  DisplayCreateContactPage,
  DisplayEditContactPage,
  DisplayContactListPage,
  HandleDeleteContact,
  HandleCreateContact,
  HandleEditContact,
} from "../Controllers/contacts";
import { AuthGuard } from "../Utils";

const router = Router();
export default router;

/* Get /contacts-list page */
router.get("/", AuthGuard, DisplayContactListPage);

/* Get /contacts-list/create page */
router.get("/create", AuthGuard, DisplayCreateContactPage);

/* Get /contacts-list/edit page */
router.get("/edit/:id", AuthGuard, DisplayEditContactPage);

/* Get /contacts-list/delete */
router.get("/delete/:id", AuthGuard, HandleDeleteContact);

/* Post /contacts-list/create page */
router.post("/create", AuthGuard, HandleCreateContact);

/* Post /contacts-list/edit page */
router.post("/edit/:id", AuthGuard, HandleEditContact);
