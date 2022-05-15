import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinementBanner = ({ dateToday, setDateToday }) => {

    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse align-middle items-center justify-center ">
                    <div className='p-20'><img src="https://api.lorem.space/image/face?w=220&h=350" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                        {/* <p className='text-center text-bold text-xl pt-3 text-secondary'>Our Doctors</p> */}
                    </div>
                    <div className='p-20'>
                        <DayPicker className='p-10 shadow-xl rounded-2xl'
                            mode="single"
                            selected={dateToday}
                            onSelect={setDateToday}
                        />
                        {/* <p className='px-10 py-5'>You have selected: {format(dateToday, 'PP')}</p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinementBanner;