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
router.get("/", DisplayContactListPage);

/* Get /contacts-list/create page */
router.get("/create", DisplayCreateContactPage);

/* Get /contacts-list/edit page */
router.get("/edit/:id", DisplayEditContactPage);

/* Get /contacts-list/delete */
router.get("/delete/:id", HandleDeleteContact);

/* Post /contacts-list/create page */
router.post("/create", HandleCreateContact);

/* Post /contacts-list/edit page */
router.post("/edit/:id", HandleEditContact);
