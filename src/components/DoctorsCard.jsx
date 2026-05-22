import { Button, Card, CardFooter } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaClock, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

const DoctorsCard = ({appointment}) => {
    console.log(appointment)
    return (
         <Card className="max-w-sm rounded-2xl shadow-lg overflow-hidden border">
      
      {/* Image */}
      <div className="relative h-52 w-full">
        <Image
          src={appointment.image}
          alt={appointment.name}
          fill
          className="object-cover object-top"
        />

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-full flex items-center gap-1 text-sm shadow">
          <FaStar className="text-yellow-400" />
          <span>{appointment.rating}</span>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">
         {appointment.name}
        </h2>

        <p className="text-blue-500 text-sm font-medium">
          {appointment. specialty}
        </p>

        <p className="text-gray-500 text-sm">
         {appointment.description}
        </p>

        {/* Info */}
        <div className="text-sm text-gray-500 space-y-1 mt-2">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> {appointment. location}
          </p>

          <p className="flex items-center gap-2">
            <FaClock /> {appointment.experience}
          </p>
        </div>
      </div>

      {/* Footer */}
      <CardFooter className="flex justify-between items-center border-t pt-3">
        <div>
          <p className="text-xs text-gray-400">{appointment.specialty}</p>
          <p className="text-lg font-bold text-green-600">
           { appointment.fee}
          </p>
        </div>

       <Link href={`/appointments/${appointment._id}`}>
        <Button className="bg-[#157a83]   font-semibold text-white px-4 py-2 rounded-full text-sm hover:bg-teal-600 transition">
          View Details
        </Button>
       </Link>
      </CardFooter>
    </Card>
    );
};

export default DoctorsCard;