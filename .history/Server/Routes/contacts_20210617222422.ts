import express from "express";

const router = express.Router();
/* Get Route for create new contact page */
router.get("create", DisplayCreateContactPage);
