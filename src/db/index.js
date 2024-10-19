import mongoose from "mongoose";
import { DB_Name } from "../constants.js";
//async awat => db is another continent */

const connectDB = async () => {
    try {
      const connectionInstance  = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
      // console.log(connectionInstance);
      console.log(`\n MongoDB connecetd !!DB HOST ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("connectuin error", error);
        process.exit()
    }
}

export default connectDB