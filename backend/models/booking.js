import mongoose from 'mongoose'
import validator from 'validator'

const bookingSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[3, "First name must be contain atleast 3 character"],
        maxLength: [30, "First name can not exceed 30 character "]
    },
    lastName:{
        type: String,
        required:true,
        minLength:[3, "Last name must be contain atleast 3 character"],
        maxLength: [30, "Last name can not exceed 30 character "]

    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail, "Provide a valid email"]
    },
    phone:{
        type: String,
        required: true,
        minLength: [11, "Phone number must be atleast 11 characters"],
        maxLength: [11, "Phone number not be exceed 11 characters"]
    },
    time:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
},
{timestamps: true}
);

export const booking = mongoose.model("bookings", bookingSchema)