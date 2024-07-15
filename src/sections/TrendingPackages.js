
import React from 'react';
import Bali from "../assets/images/Bali.png"
import Maldives from "../assets/images/Maldives.png"
import Malaysia from "../assets/images/Malaysia.png"
import Head from "../assets/images/layer1.png"

function TrendingPackages() {
    const packages = [
        {
            country: 'UK',
            type: 'Adventure',
            discount: '15% OFF',
            title: 'A 4 Day Maldives Package In Paradise Island Resort',
            review: '4.5',
            reviews: '(500)',
            totalDays: '7 Days',
            pricePerDay: '£147',
            ageRange: '18 to 55',
            language: 'English',
            oldPrice: '£1,829',
            newPrice: '£1,178',
            savings: 'You save £1,178',
            image: Maldives,
        },
        {
            country: 'UK',
            type: 'Adventure',
            discount: '15% OFF',
            title: 'Bali 9 Day/ 8 Night Group Tour | ULTIMATE',
            review: '4.5',
            reviews: '(500)',
            totalDays: '9 Days',
            pricePerDay: '£104',
            ageRange: 'Up to 35 year',
            language: 'English',
            oldPrice: '£1,829',
            newPrice: '£937',
            savings: 'You save £1,178',
            image: Bali,
        },
        {
            country: 'UK',
            type: 'Adventure',
            discount: '15% OFF',
            title: 'Tailor-Made Private Malaysia Holiday Package, Daily Departure',
            review: '4.5',
            reviews: '(500)',
            totalDays: '10 days',
            pricePerDay: '£147',
            ageRange: '18 to 55',
            language: 'English',
            oldPrice: '£1,829',
            newPrice: '£3,635',
            savings: 'You save £1,178',
            image: Malaysia,
        },
    ];

    return (

        <div className="flex flex-col items-center p-8">
            <div className="relative mb-8">
                <img src={Head} alt="Background" className="" style={{ height: 68, width: 360 }} />
                <h1
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black w-full"
                    style={{ fontWeight: 600, fontSize: 36 }}
                >
                    Trending Packages
                </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                    <>
                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={pkg.image} alt="" />
                            </a>

                            <div class="p-5">
                                <a href="#">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                                </a>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </>

                ))}
            </div>
        </div>
    );
}

export default TrendingPackages;

