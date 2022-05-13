import React from 'react';

const Service = ({ eachService }) => {
    return (
        <div class="card w-96  image-full shadow-xl">
            <figure >
                <img src={eachService.image} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title pb-4 text-white text-2xl">{eachService.name}</h2>
                <p className='text-lg text-white'>{eachService.description}</p>

            </div>
        </div>
    );
};

export default Service;