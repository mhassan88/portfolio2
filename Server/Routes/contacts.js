"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_1 = require("../Controllers/contacts");
const Utils_1 = require("../Utils");
const router = express_1.Router();
exports.default = router;
router.get("/", contacts_1.DisplayContactListPage);
router.get("/create", Utils_1.AuthGuard, contacts_1.DisplayCreateContactPage);
router.get("/edit/:id", Utils_1.AuthGuard, contacts_1.DisplayEditContactPage);
router.get("/delete/:id", Utils_1.AuthGuard, contacts_1.HandleDeleteContact);
router.post("/create", Utils_1.AuthGuard, contacts_1.HandleCreateContact);
router.post("/edit/:id", Utils_1.AuthGuard, contacts_1.HandleEditContact);
//# sourceMappingURL=contacts.js.map