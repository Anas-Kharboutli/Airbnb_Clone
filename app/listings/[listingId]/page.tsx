import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getLidtingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";


interface IParams {
    listingId?: string;
}

const ListingPage = async (
     {params}:  { params: IParams} ) => {

      const { listingId } = await params;

    const listing = await getListingById({ listingId });
    const currentUser = await getCurrentUser();

    if(!listing) {
        return (
            <EmptyState />
        )
    };


  return (
    <div>
      <ListingClient
      listing={listing}
      currentUser={currentUser}
      />
    </div>
  )
}

export default ListingPage
