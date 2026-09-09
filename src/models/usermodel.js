import { DataTypes } from "sequelize"
import {sequelize} from "../DB/connectdb.js"


const usermodel=sequelize.define("user",{
    name:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING, unique:true,
        validate:{
                isEmail: true, 
        }
    },
    password:{type:DataTypes.STRING,
        validate:{
            checkpassword(value){
                if(!value||value.length<=6){
                    return res.status(400).json("pass must be greater than 6")
                }
            }
        }},
    role:{type:DataTypes.ENUM,values:["admin"],defaultValue:"admin"}
})


export default usermodel