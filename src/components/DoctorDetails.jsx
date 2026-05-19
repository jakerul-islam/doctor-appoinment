import { BanknotesIcon, BriefcaseIcon, BuildingOffice2Icon, MapPinIcon, StarIcon } from '@heroicons/react/16/solid';
import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import BookingCardModal from './BookingCardModal';





const DoctorDetails = ({doctor}) => {
    console.log(doctor)
    return (
       <Card className="max-w-4xl w-full mx-auto bg-white border border-slate-100 shadow-sm p-4 sm:p-6 rounded-2xl">
      <div className="p-0 flex flex-col md:flex-row gap-6 items-start md:items-center">
        
        {/* Left Side: Image Profile */}
        <div className="w-full md:w-1/3 max-w-[260px] mx-auto md:mx-0 aspect-[4/5] rounded-xl overflow-hidden shadow-inner">
          <Image
            src={doctor?.image} // Demo image, ekhane apnar image link hobe
            alt={doctor?.name}
            width={300}
            height={300}
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right Side: Doctor Details */}
        <div className="flex-1 w-full flex flex-col gap-4">
          
          {/* Tag & Name */}
          <div className="space-y-1">
            <Chip 
              size="sm" 
              variant="flat" 
              className="bg-cyan-50 text-cyan-600 font-medium rounded-md px-1"
            >
             {doctor?.specialty}
            </Chip>
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{doctor?.name}</h2>
            
            {/* Rating */}
            <div className="flex items-center gap-1 mt-1">
              <StarIcon className="w-4 h-4 text-amber-500" />
              <span className="text-sm font-semibold text-slate-700">{doctor?.rating}</span>
              <span className="text-xs text-slate-400">/ 5.0</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
           {doctor?.description}
          </p>

          {/* Info Grid (2x2 Layout) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-2">
            
            {/* Experience */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
                <BriefcaseIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Experience</p>
                <p className="text-sm font-bold text-slate-700">{doctor?.experience}</p>
              </div>
            </div>

            {/* Hospital */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
                <BuildingOffice2Icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Hospital</p>
                <p className="text-sm font-bold text-slate-700">{doctor?.hospital}</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
                <MapPinIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="text-sm font-bold text-slate-700">{doctor?.location}</p>
              </div>
            </div>

            {/* Consultation Fee */}
            <div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50">
              <div className="p-2 bg-cyan-50 text-cyan-600 rounded-lg">
                <BanknotesIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-medium">Consultation Fee</p>
                <p className="text-sm font-bold text-slate-700">{doctor?.fee}</p>
              </div>
            </div>

          </div>

          {/* Availability Slots */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Availability</h4>
            <div className="flex flex-wrap gap-2">
              
             {
              doctor?. availability?.map((available, index)=><span key={index} className="text-xs font-medium bg-cyan-50 text-cyan-600 px-3 py-1.5 rounded-full border border-cyan-100">
               {available}
              </span>)
             }
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-2">
        <BookingCardModal doctor={doctor}></BookingCardModal>
          </div>

        </div>
      </div>
    </Card>
    );
};

export default DoctorDetails;