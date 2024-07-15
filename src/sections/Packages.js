import React from 'react'
import Families from "../assets/images/Families.png"
import Couple from "../assets/images/Couple.png"
import Seniors from "../assets/images/Seniors.png"
import YoungAdults from "../assets/images/YoungAdult.png"
import Solo from "../assets/images/Solo.png"
import Groups from "../assets/images/Group1.png"
import Head from "../assets/images/layer1.png"


function Packages() {

    const categories = [
        { name: 'Families', image: Families },
        { name: 'Couple', image: Couple },
        { name: 'Seniors', image: Seniors },
        { name: 'Young Adults', image: YoungAdults },
        { name: 'Solo', image: Solo },
        { name: 'Groups', image: Groups },
    ];
    return (
        <div>
            <div className="flex flex-col items-center px-10" >
                <div className="relative mb-8">
                    <img src={Head} alt="Background" className="" style={{height:68, width:240}} />
                    <h1 className="absolute inset-0 flex items-center justify-center text-black" style={{fontWeight:600 , fontSize:36}}>
                        Package
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {categories.map((category) => (
                        <div key={category.name} className="flex flex-col items-center">
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                                <img src={category.image} alt={category.name} className="object-cover" style={{height:124, width:183}}/>
                            </div>
                            <div className="p-2 rounded-b-2xl w-3/4 shadow-lg" style={{ backgroundColor: "#F0FFEB" }}>
                                <h2 className="text-lg font-bold">{category.name}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Packages
