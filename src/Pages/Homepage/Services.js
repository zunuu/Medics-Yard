import React from 'react';
import Service from './Service';
import firstaid from '../../images/first aid.jpg'
import ambulance from '../../images/ambulance.jpg'
import emergency from '../../images/emergency.jpg'


const Services = () => {
    const allServices = [
        {
            _id: 1,
            name: "First Aid Service",
            description: "We are giving the best First Aid Service at free of cost 24hrs. Besides First Aid treatment, this service also available for them who need basic suggestions in various aspects of medical terms, general QnA, diseases, remedy and prevention",
            image: firstaid
        },
        {
            _id: 2,
            name: "Emergency Consultation",
            description: "When a patient have an emergency situation, we take a special attention,if needed our doctors arrive in the home as soon as possible and come to the nearest hospital with the patient for treatment , test or for the other actions",
            image: emergency
        },
        {
            _id: 3,
            name: "Ambulance",
            description: "Due to Emergency situation or Difficulty in the weather, it wouldn't possible for a patient to arrive in the nearest hospital.We will take a look at that moment in any kinds of weather condition, we try our best",
            image: ambulance
        }

    ]
    return (
        <div className='my-20 text-center'>
            <h3 className='text-primary text-2xl font-bold uppercase '>Our Services</h3>
            <h2 className='text-black text-5xl'>Services We Provide</h2>



            <div className='grid my-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4'>
                {
                    allServices.map(eachService =>
                        <Service
                            key={eachService._id}
                            eachService={eachService}
                        >


                        </Service>)
                }
            </div>

        </div>
    );
};

export default Services;