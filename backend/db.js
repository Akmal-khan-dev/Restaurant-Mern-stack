import mongoose from "mongoose";

const dbConnection = ()=>(
    mongoose.connect(process.env.DB_URL, {
        dbName:'Restaurant'
    }).then(()=>console.log("Database connected.")).catch((err)=>console.log(`Database connection error occured.${err}`))
)
export default dbConnection