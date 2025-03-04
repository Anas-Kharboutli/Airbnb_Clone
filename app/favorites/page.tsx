export const dynamic = 'force-dynamic';

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings"
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";


const FavoritesPage = async () => {

    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(listings.length === 0) {
        return (
            <EmptyState
            title="No favorites found"
            subtitle="Looks like you have no fovorite listings"
            />
        )
    }

  return (
    <div className="mt-8">
    <FavoritesClient 
    listings={listings}
    currentUser={currentUser}
    />
    </div>
  )
}

export default FavoritesPage
