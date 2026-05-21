
// "use client";

// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
// import { Pencil } from "lucide-react";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

// const UpdateModal = ({ booking }) => {
//   const router = useRouter();
  
//   // 1. Initial Data diye State gulo manage kora hoyeche
//   const [patientName, setPatientName] = useState(booking.patientName || "");
//   const [date, setDate] = useState(booking.date || "");
//   const [time, setTime] = useState(booking.time || "");
//   const [reason, setReason] = useState(booking.reason || "");
//   const [loading, setLoading] = useState(false);

//   const handleBookingSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     // 2. Eikhane updated data target object toiri kora hoyeche
//     const updatedBookingData = {
//       patientName,
//       date,
//       time,
//       reason
//     };

//     try {
//       const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${booking._id}`, {
//         method: 'PATCH',
//         headers: {
//           'content-type': 'application/json'
//         },
//         // 🎯 ANSWER: Stringify er bhitore ei object-ti pass hobe
//         body: JSON.stringify(updatedBookingData) 
//       });

//       if (res.ok) {
//         toast.success("📝 Appointment updated successfully!");
//         router.refresh(); // UI content automatic update hobe refresh chara
//       } else {
//         toast.error("Failed to update appointment");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Modal>
//       <Button
//         size="sm"
//         className="bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2 border border-slate-200 rounded-xl flex items-center gap-1.5 h-9 min-w-0 transition-colors shadow-sm"
//       >
//         <Pencil size={14} className="text-slate-800" />
//         Update
//       </Button>
//       <Modal.Backdrop>
//         <Modal.Container placement="auto">
//           <Modal.Dialog className="sm:max-w-md">
//             <Modal.CloseTrigger />
//             <Modal.Header>
//               <Modal.Heading>Update Appointment</Modal.Heading>
//             </Modal.Header>
//             <Modal.Body className="p-6">
//               <Surface variant="default">
//                 <form className="flex flex-col gap-4" onSubmit={handleBookingSubmit}>
                  
//                   {/* Doctor Name - ReadOnly */}
//                   <TextField value={booking.doctorName} className="w-full" name="name" type="text">
//                     <Label>Doctor Name</Label>
//                     <Input disabled />
//                   </TextField>

//                   {/* Patient Name */}
//                   <TextField className="w-full" name="patient" type="text">
//                     <Label>Patient Name</Label>
//                     <Input
//                       value={patientName}
//                       placeholder="Enter patient name"
//                       onChange={(e) => setPatientName(e.target.value)}
//                     />
//                   </TextField>

//                   {/* Date and Time Row */}
//                   <div className="grid grid-cols-2 gap-4">
//                     {/* Date Input */}
//                     <TextField isRequired className="w-full" name="date" type="date">
//                       <Label className="text-sm font-semibold text-slate-700 mb-1 block">Date</Label>
//                       <Input
//                         value={date}
//                         onChange={(e) => setDate(e.target.value)}
//                       />
//                     </TextField>

//                     {/* Time Input */}
//                     <TextField isRequired className="w-full" name="time" type="time">
//                       <Label className="text-sm font-semibold text-slate-700 mb-1 block">Time</Label>
//                       <Input
//                         value={time}
//                         onChange={(e) => setTime(e.target.value)}
//                       />
//                     </TextField>
//                   </div>

//                   {/* Reason */}
//                   <TextField className="w-full" name="message">
//                     <Label>Reason</Label>
//                     <Input
//                       value={reason}
//                       placeholder="Enter your reason"
//                       onChange={(e) => setReason(e.target.value)}
//                     />
//                   </TextField>

//                   {/* Modal Footer Submit Button */}
//                   <Modal.Footer className="p-0 mt-2">
//                     <Button
//                       className="w-full rounded-xl bg-[#157a83] text-white font-semibold h-11 hover:bg-[#11646a]"
//                       type="submit"
//                       disabled={loading}
//                     >
//                       {loading ? "Updating..." : "Confirm Update"}
//                     </Button>
//                   </Modal.Footer>

//                 </form>
//               </Surface>
//             </Modal.Body>
//           </Modal.Dialog>
//         </Modal.Container>
//       </Modal.Backdrop>
//     </Modal>
//   );
// };

// export default UpdateModal;

"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const UpdateModal = ({ booking }) => {
  const router = useRouter();
  
  // 🎯 FIXED: Modal open/close manually control korar jonno state add kora holo
  const [isOpen, setIsOpen] = useState(false);

  const [patientName, setPatientName] = useState(booking.patientName || "");
  const [date, setDate] = useState(booking.date || "");
  const [time, setTime] = useState(booking.time || "");
  const [reason, setReason] = useState(booking.reason || "");
  const [loading, setLoading] = useState(false);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedBookingData = {
      patientName,
      date,
      time,
      reason
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${booking._id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(updatedBookingData) 
      });

      if (res.ok) {
        toast.success("📝 Appointment updated successfully!");
        
        // 🎯 FIXED: Update confirm holei modal automatic close hoye jabe!
        setIsOpen(false); 
        
        router.refresh(); 
      } else {
        toast.error("Failed to update appointment");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    // 🎯 FIXED: Modal-ti ekhon state control dynamic validation-e thakbe
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        onPress={() => setIsOpen(true)} // Modal manually trigger open
        size="sm"
        className="bg-white hover:bg-slate-50 text-slate-700 font-medium px-4 py-2 border border-slate-200 rounded-xl flex items-center gap-1.5 h-9 min-w-0 transition-colors shadow-sm"
      >
        <Pencil size={14} className="text-slate-800" />
        Update
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Update Appointment</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={handleBookingSubmit}>
                  
                  {/* Doctor Name - ReadOnly */}
                  <TextField value={booking.doctorName} className="w-full" name="name" type="text">
                    <Label>Doctor Name</Label>
                    <Input disabled />
                  </TextField>

                  {/* Patient Name */}
                  <TextField className="w-full" name="patient" type="text">
                    <Label>Patient Name</Label>
                    <Input
                      value={patientName}
                      placeholder="Enter patient name"
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </TextField>

                  {/* Date and Time Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Date Input */}
                    <TextField isRequired className="w-full" name="date" type="date">
                      <Label className="text-sm font-semibold text-slate-700 mb-1 block">Date</Label>
                      <Input
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </TextField>

                    {/* Time Input */}
                    <TextField isRequired className="w-full" name="time" type="time">
                      <Label className="text-sm font-semibold text-slate-700 mb-1 block">Time</Label>
                      <Input
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </TextField>
                  </div>

                  {/* Reason */}
                  <TextField className="w-full" name="message">
                    <Label>Reason</Label>
                    <Input
                      value={reason}
                      placeholder="Enter your reason"
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </TextField>

                  {/* Modal Footer Submit Button */}
                  <Modal.Footer className="p-0 mt-2">
                    <Button
                      className="w-full rounded-xl bg-[#157a83] text-white font-semibold h-11 hover:bg-[#11646a]"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Updating..." : "Confirm Update"}
                    </Button>
                  </Modal.Footer>

                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default UpdateModal;
