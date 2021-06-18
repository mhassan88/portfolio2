import { Router } from "express";
import {
  DisplayCreateContactPage,
  DisplayEditContactPage,
} from "../Controllers/contacts";

const router = Router();
export default router;

/* Get Route for create new contact page */
router.get("create", DisplayCreateContactPage);

/* Get Route for edit item */
router.get("edit/:id", DisplayEditContactPage);
