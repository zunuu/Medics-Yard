import React from 'react';

const Service = ({ eachService }) => {
    return (
        <div className="card lg:max-w-lg  image-full shadow-xl">
            <figure >
                {/* make these images to show when hover...without hover the cards will be transperant */}
                <img src={eachService.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body text-center">
                <h2 className="card-title pb-4 text-white text-2xl">{eachService.name}</h2>
                <p className='text-lg text-white'>{eachService.description}</p>

            </div>
        </div>
    );
};

export default Service;