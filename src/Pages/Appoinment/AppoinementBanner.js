import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinementBanner = ({ dateToday, setDateToday }) => {

    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse ">
                    <div className='p-20'><img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' /></div>
                    <div className='p-20'>
                        <DayPicker className='p-10 shadow-xl rounded-2xl'
                            mode="single"
                            selected={dateToday}
                            onSelect={setDateToday}
                        />
                        <p className='px-10 py-5'>You have selected: {format(dateToday, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinementBanner;