import { Router } from "express";
import { createcomment, findcomment, updatecomment } from "./comment.service.js";
const commentrouter=Router()



commentrouter.post("/signup",createcomment)
commentrouter.patch("/:id",updatecomment)
commentrouter.get("/get",findcomment)


export default commentrouter