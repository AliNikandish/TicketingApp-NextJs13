import mongoose,{Schema} from "mongoose";

const ticketShema= new Schema(

    {
        title: String,
        description: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,

    },
    {
        timestamps:true,
    }
)

const Ticket=mongoose.models.Ticket || mongoose.model("Ticket",ticketShema)

export default Ticket