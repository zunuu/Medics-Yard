import React from 'react';
import BannerImg from '../../images/banner.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div class="hero bg-image min-h-screen bg-base-100">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={BannerImg}
                        class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Box Office News!</h1>
                        <p class="py-6">One of the best Telemedicine Web Portal at your fingertips for your better health & greater life</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;