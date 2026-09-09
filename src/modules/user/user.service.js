import usermodel from "../../models/usermodel.js";



export const createuser=async(req,res,next)=>{
    try {
        const{name,email,password,role}=req.body
        const isemail=await usermodel.findOne({where:{email}})
if(isemail){

    return res.status(400).json("email already exist")
}
        const users=usermodel.build({name,email,password,role})
        await users.save()
        res.status(200).json({message:"user create success",data:users})
  
    } catch (error) {
      
        res.status(500).json({message:"error to create user ",error:error.message})

        }
    }
 export const updateuser=async(req,res,next)=>{
        try {
            const {id}=req.params
            const{name,email,password,role}=req.body
            const user=await usermodel.upsert({id,name,email,password,role})
            res.status(200).json({message:"user create or update success",data:user})
        } catch (error) {
            return res.status(400).json({ 
      message: "Error to update or create  user", 
      error: error.message 
    })
        }
    }
    export const userfind=async (req,res,next)=>{
        try {
            const{name,email,password,role}=req.body
            const user=await usermodel.findOne({where:{email}})
            if(!user){
           return res.status(200).json({message:"user not exist"})

            }
           return res.status(200).json({message:"user find exist",data:user})
 


        } catch (error) {
            
            res.status(500).json({message:"err to find user ",error:error.message})
        }
    }
 export const userfind_pk=async (req,res,next)=>{
        try {
            const{id}=req.params
            const user=await usermodel.findByPk(id)
            if(!user){
           return res.status(200).json({message:"user not exist"})

            }
           return res.status(200).json({message:"user findpk exist",data:user})
 


        } catch (error) {
            
            res.status(500).json({message:"error to find user ",error:error.message})
        }
    }


