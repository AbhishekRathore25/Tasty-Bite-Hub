import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://TastyBiteHub:TastyBiteHub@cluster0.zenrymt.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}
