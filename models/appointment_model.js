import { model, Schema , Types} from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";


const appointmentSchema = new Schema({
        department: {type:String, enum: ["General Practice", "Dentistry", "Cardiology", "Obstetrics and Gynecology", "Orthopedics", "Infectious Diseases", "Dermatology", "Pediatrics", "Ophthalmology"], required: true},
        doctors: {type: String, enum:[
                "Dr. John Smith",
                "Dr. Emily Johnson",
                 "Dr. Sarah Davis",
                "Dr. David Wilson",
                "Dr. James Taylor",
                "Dr. Jessica Anderson",
                 "Dr. Robert Thomas",
                 "Dr. Elizabeth Lee",
                "Dr. William Harris",
                 "Dr. Karen Clark, "   
        ]} ,
        reasonForappointment: {type: String},
        date: {type: Date},
        user: { type: Types.ObjectId, ref: "User" }
    },{
        timestamps:true
    })

    appointmentSchema.plugin(toJSON);
    export const AppointmentModel = model("Appointment", appointmentSchema)


// // Define the doctor sub-schema
// const doctorSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   contactNumber: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   availabilitySchedule: {
//     type: String,
//     required: true
//   }
// }, { _id: false }); // Disable automatic _id field for sub-schema

// // Define the department schema with embedded doctors
// const appointmentSchema = new Schema({
//     department: {type:String, enum: ["General Practice", "Dentistry", "Cardiology", "Obstetrics and Gynecology", "Orthopedics", "Infectious Diseases", "Dermatology", "Pediatrics", "Ophthalmology"], required: true},
//     doctors: [doctorSchema] ,// Embed doctor schema within the department
//     reasonForappointment: {type: String},
//     date: {type: Date},
//     user: { type: Types.ObjectId, ref: "User" }
// })


  // Apply the toJSON plugin
  departmentSchema.plugin(toJSON);
  
  const Department = mongoose.model('Department', departmentSchema);
  
  export default Department;