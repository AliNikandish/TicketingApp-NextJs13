const mongoose = require("mongoose")

const DBName='ticketing-app'

const ConnectToDB = async () =>{
try {
    if(mongoose.connection[0].redayState){
        return false
    }
    await mongoose.connect(`mongodb://127.0.0.1:27017/${DBName}`)
    console.log(`Connected To DB:${DBName}  Successfully`);
    
} catch (error) {
    console.log("Error in DB Connection =>", error);

}
}

export default ConnectToDB ;