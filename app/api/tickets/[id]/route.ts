import TicketModel from "@/app/models/Ticket";
import ConnectToDB from "@/utils/ConnectToDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(requet:NextRequest,{params}:any){

    ConnectToDB()
    const {id}=params
    const ticket = TicketModel.findOne({ _id: id })
    if (ticket !== null) {
        return NextResponse.json(
          {
            ticket,
          },
          {
            status: 200,
          }
        );
      }else{
        return NextResponse.json(
            {
              message:`there is no Ticket with id: ${id}`,
            },
            {
              status: 200,
            }
          );
      }
    
    
}


export async function PUT(req:NextRequest, { params }:any) {
    ConnectToDB()
    try {
        const {id}=params
        const body = await req.json();
        const ticketData = body.formData;
        const updateTicketData = await TicketModel.findByIdAndUpdate(id, {
            ...ticketData,
          });
          return NextResponse.json({ message: `Ticket with id : ${id}  Updated` }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Error", error }, { status: 500 }); 
    }
  
  

}

export async function DELETE(req:NextRequest, { params }:any) {
    try {
      const { id } = params;
  
      await TicketModel.findByIdAndDelete(id);
      return NextResponse.json({ message: `Ticket with id : ${id}  Deleted` }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }
  