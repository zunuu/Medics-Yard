import React from 'react';

const BookingCard = ({ eachBooking }) => {
    return (
        <div>
            <div class="card lg:max-w-lg shadow-lg rounded-3xl">

                <div class="card-body">
                    <h2 class="card-title">{eachBooking.name}</h2>
                    <p>{eachBooking.slots.length ?
                        // here 0 means false in javascript thats why ternary operand condition didn't give any number rather it's wrote eachBooking.slots.length ?
                        <span>{eachBooking.slots[0]}</span>
                        :
                        <span className='text-red-600'>Try another Date</span>

                    }</p>
                    <p>{eachBooking.slots.length} {eachBooking.slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div class="card-actions justify-center pt-4">
                        <button disabled={eachBooking.slots.length === 0} class="btn btn-secondary text-white">Book Appoinment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;