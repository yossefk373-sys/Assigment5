import commentmodel from "../../models/commentmodel.js"


export const createcomment=async(req,res,next)=>{
    try {
        // const {content,postId,userId}=req.body
        const comment= await commentmodel.bulkCreate(req.body)
        res.status(200).json({message:"create comment succ",data:comment  })
    } catch (error) {

        res.status(400).json({message:"error to create comment",error:error.message})
        
    }
}
export const updatecomment = async (req, res) => {
  try {
    const { id } = req.params; 
    const { userId, content } = req.body;

    const comment = await commentmodel.findByPk(id);

    
    if (!comment) {
      return res.status(404).json({ message: "comment not found." });
    }

    
    if (comment.userId !== Number(userId)) {
      return res.status(403).json({ message: "You are not authorized to update this comment." });
    }

    
    comment.content = content;
    await comment.save();

    return res.status(200).json({ message: "Comment updated." });
  } catch (error) {
    return res.status(500).json({ message: "error updating comment", error: error.message });
  }
};
export const findcomment=async(req,res,next)=>{
    try {
        const{content,userId,postId}=req.body
        const comment=await commentmodel.findOne({content,userId,postId})
         res.status(200).json({message:"comment create or update success",data:comment})
    } catch (error) {
         res.status(400).json({message:"error create or update ",error:error.message})
    }
}
    