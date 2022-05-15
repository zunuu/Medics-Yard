import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppoinementBanner from './AppoinementBanner';
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppoinementBanner dateToday={date} setDateToday={setDate}></AppoinementBanner>
            <AvailableAppointment dateToday={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appoinment;