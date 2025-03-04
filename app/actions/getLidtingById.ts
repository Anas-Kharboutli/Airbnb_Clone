import prisma from '@/app/libs/prismadb';

interface IParams {
    listingId?: string;
} 

export default async function getListingById (
    params: IParams
) {
    try { 
        const { listingId } = params;

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            },
            include: {
                user: true
            }
        })

        if(!listing) {
            return null;
        }

        return {
            ...listing,
            createAt: listing.createAt.toISOString(),
            user: {
                ...listing.user,
                createAt: listing.user.createAt.toISOString(),
                updateAt: listing.user.updateAt.toISOString(),
                emailVerified: listing.user.emailVerified?.toISOString() || null
            }
        }
    } catch (error: unknown) {
        throw new Error(String(error))
    }
}