import { Schema } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";
import { required } from "joi";


const userSchema = new Schema({
    firstName: {type:String, required:true},
    lastName: {type: String, required: true},
    email: {type: String, unique: true, required:true},
    password: {type: String, required: true},
    location: {type:String}
})

