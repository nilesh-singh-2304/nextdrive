import { Schema} from "mongoose";
const mongoose = require("mongoose");

const QuerySchema = new Schema(
  {
    name : {type: String , required:true},
    email : {type: String , required:true},
    phone : {type: String , required:true},
    projbudget : {type: String , required:true},
    projDeadline : {type: String , required:true},
    message : {type: String },
  },
  { timestamps: true }
);

mongoose.models = {}; 
export default mongoose.model("Query", QuerySchema);