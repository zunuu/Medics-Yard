import React from 'react';



const Inforcard = ({ img, cardTitle, backgroundClass, Description }) => {
    return (
        <div className={` card py-8 lg:card-side bg-accent shadow-xl ${backgroundClass}`}>
            <figure className='pl-5'>
                <img src={img} alt='' />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p>{Description}</p>

            </div>
        </div>
    );
};

export default Inforcard;