import { Router } from "express";
import { DisplayCreateContactPage } from "../Controllers/contacts";
//const router = express.Router();
/* Get Route for create new contact page */
Router().get("create", DisplayCreateContactPage);
