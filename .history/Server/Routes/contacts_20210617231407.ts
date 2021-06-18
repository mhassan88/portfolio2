import { Router } from "express";
import {
  DisplayCreateContactPage,
  DisplayEditContactPage,
  DisplayContactListPage,
} from "../Controllers/contacts";

const router = Router();
export default router;

/* Get contacts list page */
router.get("/contactlist", DisplayContactListPage);

/* Get Route for create new contact page */
router.get("create", DisplayCreateContactPage);

/* Get Route for edit item */
router.get("edit/:id", DisplayEditContactPage);
