import React from 'react';
import Argentina from "../assets/popularCountry/argentina.png"
import Brazil from "../assets/popularCountry/Brazil.png"
import Chile from "../assets/popularCountry/Chile.png"
import CostaRica from "../assets/popularCountry/CostaRica.png"
import Ecuador from "../assets/popularCountry/Ecuador.png"
import MachuPicchu from "../assets/popularCountry/MachaPichu.png"
import Mexico from "../assets/popularCountry/Mexico.png"
import Panama from "../assets/popularCountry/Panama.png"
import Patagonia from "../assets/popularCountry/Patagonia.png"
import Peru from "../assets/popularCountry/Peru.png"
import SouthAmerica from "../assets/popularCountry/SouthAmerica.png"

const countries = [
    { name: "Argentina", imgSrc: Argentina },
    { name: "Brazil", imgSrc: Brazil },
    { name: "Chile", imgSrc: Chile },
    { name: "Costa Rica", imgSrc: CostaRica },
    { name: "Ecuador", imgSrc: Ecuador },
    { name: "Machu Picchu", imgSrc: MachuPicchu },
    { name: "Mexico", imgSrc: Mexico },
    { name: "Panama", imgSrc: Panama },
    { name: "Patagonia", imgSrc: Patagonia },
    { name: "Peru", imgSrc: Peru },
    { name: "South America", imgSrc: SouthAmerica },
];

const PopularCountries = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Popular Countries</h2>
            <div className="tabs mb-6 mt-4 w-3/4 mx-auto flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6">
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">Europe</a>
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">Africa</a>
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">Asia</a>
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">Latin America</a>
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">Australia/Oceania</a>
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">North America</a>
                <a className="tab tab-bordered badge badge-lg flex-grow text-center">Polar</a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {countries.map((country, index) => (
                    <>
                        <div key={index} className="card w-[183px]">
                            <figure>
                                <img src={country.imgSrc} alt={country.name} className="w-full h-full object-cover" />
                            </figure>
                            <div className="card-body p-0 mt-2">
                                <h2 className="card-title text-sm">{country.name}</h2>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default PopularCountries;
