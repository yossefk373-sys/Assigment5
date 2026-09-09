import express from 'express'
import { connecdb, syncdb } from './DB/connectdb.js'
import userrouter from './modules/user/user.controller.js'
import postrouter from './modules/post/post.controller.js'
import commentrouter from './modules/comment/comment.controller.js'

const app=express()
const port=3000



const bootstrap=async()=>{
app.use(express.json())

app.use("/post",postrouter)
app.use("/comment",commentrouter)
app.use("/user",userrouter)




await connecdb()
await syncdb()










app.get("/",(req,res,next)=>{
    res.status(200).json("hello in my app")
})
app.use("{/demo}",(req,res,next)=>{
    res.status(500).json(`url${req.originalUrl} of method ${req.url} not found`)

})
app.listen(port,()=>{
    console.log(`server run at port:::${port}`);
    
})
}
export default bootstrap