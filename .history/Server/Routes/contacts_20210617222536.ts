import express from "express";
import { DisplayCreatContactPage } from "../Routes/contacts";
const router = express.Router();
/* Get Route for create new contact page */
router.get("create", DisplayCreateContactPage);
