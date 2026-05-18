import React from 'react';
import DoctorsCard from './DoctorsCard';

const TopRatedDoctors =async () => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`)
    const appointments = await  res.json()

    console.log(appointments)
    return (
        <div className='max-w-7xl mx-auto space-y-4 my-20 '>

            <h2 className='font-bold text-2xl text-teal-500 text-center my-4'>Our Top Doctors</h2>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>

            
            {
                appointments.map(appoinment=><DoctorsCard key={appoinment._id} appointment={appoinment}></DoctorsCard>)
            }
        </div>
        </div>
       
    );
};

export default TopRatedDoctors;