import React from 'react';



const Inforcard = ({ img, cardTitle, backgroundClass }) => {
    return (
        <div className={` card  lg:card-side bg-accent shadow-xl ${backgroundClass}`}>
            <figure className='pl-5 pt-8'>
                <img src={img} alt='' />
            </figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default Inforcard;