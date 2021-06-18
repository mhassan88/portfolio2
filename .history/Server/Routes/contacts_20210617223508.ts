import { Router } from "express";
import { DisplayCreateContactPage } from "../Controllers/contacts";
const router = Router();
/* Get Route for create new contact page */
router.get("create", DisplayCreateContactPage);
