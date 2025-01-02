import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST( 
    request: Request) {
    
    const currentUser = await getCurrentUser();
    const body = await request.json();

    if(!currentUser) {
        return NextResponse.error();
    }

    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathRoomCount,
        guestCount,
        location,
        price
    } = body;

    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathRoomCount,
            guestCount,
            locationValue: location.value,                       
            price : parseInt(price, 10),    
            userId: currentUser.id
        }
    });

    return NextResponse.json(listing);
}