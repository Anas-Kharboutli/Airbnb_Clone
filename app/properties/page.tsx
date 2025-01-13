export const dynamic = 'force-dynamic';

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";


const PropertiesPage = async () => {

   const currentUser = await getCurrentUser();
   
   if(!currentUser) {
        return (
            <>
            <EmptyState 
            title="Unauthorized"
            subtitle="Please login"
            />
            </>
        )
    }

    const listings = await getListings({
        userId: currentUser.id
    });

    if(listings.length === 0) {
        return (
            <EmptyState
            title="No listings found"
            subtitle="Looks like you have no properties"
            />
        )
    }

    return (
        <div className="mt-8">
            <PropertiesClient
            listings={listings}
            currentUser={currentUser}
            /> 
        </div>
    )
}

export default PropertiesPage
