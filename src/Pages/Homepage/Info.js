import React from 'react';
import Inforcard from './Inforcard';
import clock from '../../images/icons/clock.svg'
import location from '../../images/icons/marker.svg'
import phone from '../../images/icons/phone.svg'


const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3  gap-5'>
            <Inforcard cardTitle="Opening Hours" Description="24hrs except(Friday:10am)" backgroundClass="bg-gradient-to-r from-secondary to-primary" img={clock}></Inforcard>
            <Inforcard cardTitle="Our Location" Description="Planet Earth,Milky Way" backgroundClass="bg-accent" img={location}></Inforcard>
            <Inforcard cardTitle="Contact Us" Description="+8801700000000" backgroundClass="bg-gradient-to-r from-secondary to-primary" img={phone}></Inforcard>
        </div>
    );
};

export default Info;