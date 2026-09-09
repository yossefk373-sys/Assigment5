import { Router } from "express";
import { createpost, deletepost, getpost } from "./post.service.js";
const postrouter=Router()

postrouter.post("/signup",createpost)
postrouter.delete("/:id",deletepost)
postrouter.get("/details",getpost)



export default postrouter