import commentmodel from "../../models/commentmodel.js"
import postmodel from "../../models/postmodel.js"
import usermodel from "../../models/usermodel.js"


export const createpost=async(req,res,next)=>{
    try {
        const {tittle,content,userId}=req.body
        const posts=new postmodel({tittle,content,userId})
        await posts.save()
        res.status(200).json({message:"post created success",data:posts})


    } catch (error) {
        res.status(400).json({message:"error created post",error:error.message})
        
    }
}
export const deletepost=async(req,res,next)=>{
    try {
        const {id}=req.params
        const {userId}=req.body
        const post=await postmodel.findByPk(id)
        if(!post){
            res.status(404).json({message:"post not found"})
        }
        if(post.userId !==userId){
return res.status(404).json({ message: "You are not authorized to delete this post." });
        }
    await post.destroy()

        res.status(200).json({message:"post delete success",data:post})
    } catch (error) {
        res.status(500).json({message:"error to delete post",error:error.message});
        
        
    }
}
export const getpost=async(req,res,next)=>{
    try {
        
        const post =await postmodel.findAll({
            attributes:["id","tittle"],
            include:[{
                model:usermodel,
                attributes:["id","name"]
            }
        ]
            
        })
         res.status(200).json({message:"done",data:post});
    } catch (error) {
         res.status(500).json({message:"error to get",error:error.message});
        
    }
}