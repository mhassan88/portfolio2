import express from "express";
import { DisplayCreateContactPage } from "../Controllers/contacts";
const router = express.Router();
/* Get Route for create new contact page */
router.get("create", DisplayCreateContactPage);
