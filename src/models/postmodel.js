import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../DB/connectdb.js";
import usermodel from "./usermodel.js";
import commentmodel from "./commentmodel.js";


   

   const postmodel=sequelize.define("post",{
    tittle:{type:DataTypes.STRING},
    content:{type:DataTypes.TEXT},

   },{
    paranoid:true
   })


  postmodel.belongsTo(usermodel, { onDelete: "CASCADE", onUpdate: "CASCADE" });



   export default postmodel