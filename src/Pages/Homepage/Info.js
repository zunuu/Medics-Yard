import React from 'react';
import Inforcard from './Inforcard';
import clock from '../../images/icons/clock.svg'
import location from '../../images/icons/marker.svg'
import phone from '../../images/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Inforcard cardTitle="Opening Hours" img={clock}></Inforcard>
            <Inforcard cardTitle="Our Location" img={location}></Inforcard>
            <Inforcard cardTitle="Contact Us" img={phone}></Inforcard>
        </div>
    );
};

export default Info;