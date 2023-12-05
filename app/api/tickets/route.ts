import ConnectToDB from '@/utils/ConnectToDB'
import TicketModel from '../../models/Ticket'
import { NextRequest, NextResponse } from 'next/server'


export async function GET() {
    ConnectToDB()
    try {
        const allTickets= await TicketModel.find()
        return NextResponse.json({allTickets},{status:200})
    } catch (error) {
        return NextResponse.json({message:"Error",error},{status:500})
    }
    
}


// export async function POST(req:NextRequest) {
//     ConnectToDB()
// }