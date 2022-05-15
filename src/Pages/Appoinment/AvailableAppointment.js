import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointment = ({ dateToday }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => setServices(data));

    // }, [])
    return (
        <div>
            <h3 className='text-secondary text-center text-2xl'>Available Appoinment on {format(dateToday, 'PP')}</h3>
        </div>
    );
};

export default AvailableAppointment;