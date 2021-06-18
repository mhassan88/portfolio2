"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contacts_1 = require("../Controllers/contacts");
express_1.Router().get("create", contacts_1.DisplayCreateContactPage);
//# sourceMappingURL=contacts.js.map