export const dynamic = 'force-dynamic';

import getCurrentUser from "../actions/getCurrentUser"
import getReservations from "../actions/getReservations";
import EmptyState from "../components/EmptyState";
import ReservationClient from "./ReservationClient";


const ReservationPage = async () => {

    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return (
            <EmptyState
        title="Unauthorized"
        subtitle="Please login"
        />
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if (reservations.length === 0) {
        return( 
            <EmptyState
            title="No reservations found"
            subtitle="Looks like you have no reservations"
            />
        )
    }

  return (
    <div className="mt-8">
    <ReservationClient
    reservations={reservations}
    currentUser={currentUser}
    />
    </div>
  )
}

export default ReservationPage
