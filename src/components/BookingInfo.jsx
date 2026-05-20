import { Button, Card } from '@heroui/react';
import { Calendar, Clock, Pencil, Trash2, User } from 'lucide-react';
import React from 'react';
import UpdateModal from './UpdateModal';
import { BookingDelete } from './BookingDelete';

const BookingInfo = ({booking}) => {
    return (
        <Card className=" w-full bg-white border border-slate-100 rounded-2xl shadow-sm p-5 sm:p-6 transition-shadow hover:shadow-md">
      {/* Doctor Name Top Header */}
      <h3 className="text-[19px] font-bold text-[#009284] tracking-tight mb-4">
        {booking?.doctorName || "Dr. Nadia Akter"}
      </h3>

      {/* Appointment Info Stack */}
      <div className="space-y-2.5 mb-5 text-[14px]">
        {/* Patient Row */}
        <div className="flex items-center gap-2.5 text-slate-700">
          <User size={16} className="text-slate-400 shrink-0" />
          <div className="flex gap-1">
            <span className="text-slate-400">Patient:</span>
            <span className="font-medium text-slate-800">{booking?.patientName || "jakerul islam"}</span>
          </div>
        </div>

        {/* Date Row */}
        <div className="flex items-center gap-2.5 text-slate-700">
          <Calendar size={16} className="text-slate-400 shrink-0" />
          <div className="flex gap-1">
            <span className="text-slate-400">Date:</span>
            <span className="font-medium text-slate-800">{booking?.appointmentDate || "2026-05-13"}</span>
          </div>
        </div>

        {/* Time Row */}
        <div className="flex items-center gap-2.5 text-slate-700">
          <Clock size={16} className="text-slate-400 shrink-0" />
          <div className="flex gap-1">
            <span className="text-slate-400">Time:</span>
            <span className="font-medium text-slate-800">{booking?.appointmentTime || "22:09"}</span>
          </div>
        </div>
      </div>

      {/* Control Action Buttons Flex Layout */}
      <div className="flex items-center gap-3">
        {/* Update Button */}
       <UpdateModal booking={booking}></UpdateModal>

      
      <BookingDelete></BookingDelete>
      </div>
    </Card>
    );
};

export default BookingInfo;