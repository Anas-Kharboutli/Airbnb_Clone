import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getLidtingById";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservations from "@/app/actions/getReservations";


interface IParams {
    listingId?: string;
}

const ListingPage = async (
     {params}:  { params: IParams} ) => {

      const { listingId } = await params;

    const listing = await getListingById({ listingId });
    const currentUser = await getCurrentUser();
    const reservations = await getReservations({ listingId });

    if(!listing) {
        return (
            <EmptyState />
        )
    };


  return (
    <div>
      <ListingClient
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
      />
    </div>
  )
}

export default ListingPage
