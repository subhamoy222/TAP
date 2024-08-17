import mongoose from "mongoose";

export const dbConnection =() =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Talent_acquitistion_platform",
    })
    .then(() =>{
        console.log("connected to database!");
    })
    .catch((err) =>{
        console.log(`some error ocured while connecting to database:${err}`);

    });
};