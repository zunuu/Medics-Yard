import React from 'react';
import BannerImg from '../../images/cardiologist_18.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div class="hero bg-image min-h-screen  bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={BannerImg}
                        class="max-w-sm rounded-lg" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
                        <p class="py-6">One of the best Telemedicine Web Portal at your fingertips for your better health & greater life.No more reservation problem,no more follow up odd scheduling.Get consultation of your doctor from your home</p>
                        <button class="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary border-0">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;