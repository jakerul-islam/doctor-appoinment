import React from 'react';
import BookingInfo from './BookingInfo';

const MyBookings = ({ bookingData }) => {
    return (
        <div className="w-full">
            {bookingData?.length === 0 ? (
                /* No bookings text wrapper layout */
                <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 shadow-sm max-w-2xl mx-auto">
                    <p className="text-slate-400 font-medium text-base">
                        No appointments booked yet.
                    </p>
                </div>
            ) : (
                /* Grid cards rendering list mapping */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                    {bookingData.map((booking) => (
                        <BookingInfo booking={booking} key={booking._id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyBookings;