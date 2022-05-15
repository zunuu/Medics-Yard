import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinementBanner = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <div className='p-20'><img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' /></div>
                    <div className='p-20'>
                        <DayPicker className='p-10 shadow-xl rounded-2xl'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                        <p className='px-10 py-5'>You have selected: {format(date, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinementBanner;