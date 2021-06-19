/*    index.ts
      Name: Muhammad Hassan 
      ID: 301178235
      Date: 18 June 2021
      */
import express, { Request, Response, NextFunction } from "express";

import * as DBConfig from "../Config/db";

//name display when logged in
export function UserDisplayName(req: Request): string {
  if (req.user) {
    let user = req.user as UserDocument;
    return user.displayName.toString();
  }
  return "";
}
//Authentication access control function
export function AuthGuard(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  next();
}
