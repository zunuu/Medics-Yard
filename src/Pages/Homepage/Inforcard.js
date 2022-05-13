import React from 'react';



const Inforcard = ({ img, cardTitle }) => {
    return (
        <div class="card  lg:card-side bg-accent shadow-xl">
            <figure className='pl-5'>
                <img src={img} />
            </figure>
            <div class="card-body text-white">
                <h2 class="card-title ">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>

            </div>
        </div>
    );
};

export default Inforcard;