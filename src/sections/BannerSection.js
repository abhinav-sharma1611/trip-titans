import React from 'react';
import banner1 from "../assets/images/banner1.png";
import banner2 from "../assets/images/banner2.png";

function BannerSection() {
    return (
        <div className="flex flex-wrap justify-center">
            <div style={{ width: '580px', height: '224px' }} className="card card-compact bg-base-100 shadow-xl m-4">
                <figure>
                    <img src={banner1} alt="banner" style={{ height: '100%' }} />
                </figure>
            </div>

            <div style={{ width: '580px', height: '224px' }} className="card card-compact bg-base-100 shadow-xl m-4">
                <figure>
                    <img src={banner2} alt="baneer" style={{ height: '100%' }} />
                </figure>
                
            </div>
        </div>
    );
}

export default BannerSection;


