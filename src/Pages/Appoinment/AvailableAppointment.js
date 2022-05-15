import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingCard from './BookingCard';

const AvailableAppointment = ({ dateToday }) => {
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => setServices(data));

    // }, [])
    return (
        <div>
            <h3 className='text-secondary text-center text-2xl  pb-8'>Available Appoinment on {format(dateToday, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5'>
                {
                    booking.map(eachBooking => <BookingCard
                        key={eachBooking._id}
                        eachBooking={eachBooking}
                    ></BookingCard>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;