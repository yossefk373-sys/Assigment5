import { Router } from "express";
import { createuser, updateuser, userfind, userfind_pk } from "./user.service.js";
const userrouter=Router()

// userrouter.get("/",userget)
userrouter.post("/signup",createuser)
userrouter.patch("/:id",updateuser)
userrouter.get("/byemail",userfind)
userrouter.get("/:id",userfind_pk)





export default userrouter