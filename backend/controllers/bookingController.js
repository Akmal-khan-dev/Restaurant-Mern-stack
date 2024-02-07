import ErrorHandler from "../utilis/error.js";
import  {booking}  from "../models/booking.js";

export const addBooking = async (req, res, next) =>{
    const {firstName, lastName, email, phone, time, date } = req.body;
    if(!firstName || !lastName || !email || !phone || !time || !date){
        return next(new ErrorHandler("Please fill required field", 400))
    }

    try {
        
        await booking.create({firstName, lastName, email, phone, time, date})
       
        return res.status(200).json({
            success:true,
            message:"Successfully your order placed"
        })
    } catch (error) {
        if(error.name ==="ValidationError"){
            const ValidationErrors = Object.values(error.errors).map(err => err.message)
            return next(new ErrorHandler(ValidationErrors.join(","), 400))
        }
       
        return next(error)
    }
}