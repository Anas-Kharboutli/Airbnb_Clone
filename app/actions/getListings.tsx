import prisma from '@/app/libs/prismadb';

export interface IListingsParams {
    userId?: string;
}

export default async function getListings(
    params: IListingsParams
) {
    
    try {

        const { userId } = await params;

        let query: any = {};

        if(userId) {
            query.userId = userId;
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createAt: 'desc'
            }
        });

        const safeListings = listings.map((listing) => ({
            ...listing,
            createAt: listing.createAt.toISOString()
        }))

        return safeListings;
    }
    catch(error: any) {
        throw new Error(error);
    }
}