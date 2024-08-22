import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose
    .connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM",
    })
    .then(() => {
        console.log("Connected to Database!!");
    })
    .catch((err) => {
        console.log(`Some Error Occured whille connecting to database: ${err}`);
    });
};