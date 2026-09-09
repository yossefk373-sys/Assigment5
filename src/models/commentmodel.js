import { DataTypes } from "sequelize";
import { sequelize } from "../DB/connectdb.js";
import usermodel from "./usermodel.js";
import postmodel from "./postmodel.js";




const commentmodel=sequelize.define("comment",{
    content:{type:DataTypes.TEXT},

})


 commentmodel.belongsTo(usermodel, { onDelete: "CASCADE", onUpdate: "CASCADE" });
  commentmodel.belongsTo(postmodel, { onDelete: "CASCADE", onUpdate: "CASCADE" });
export default commentmodel