"use client";
import React, { useState } from "react";
// import {Envelope} from "@gravity-ui/icons";
import {
  Button,
  DateField,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
  Select,
  ListBoxItem,
  ListBox,
  Popover,
  SelectValue,
  SelectTrigger
  
} from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const BookingCardModal = ({ doctor }) => {
    const { data: session } = authClient.useSession();
      const user = session?.user;
    const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Female");
  const [date ,setDate]= useState('') 
  const [loading, setLoading] = useState(false);
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [isOpen, setIsOpen] = useState(true);
  

  const genderOptions = [
    { id: "male", label: "Male" },
    { id: "female", label: "Female" },
    { id: "other", label: "Other" }
  ];

  const handleBookingSubmit = async (e) => {
    e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে
    setLoading(true)
    // ব্যাকেন্ডে পাঠানোর জন্য অবজেক্ট তৈরি
    const bookingData = {
      userEmail: user?.email,
      userName:user?.name,
      userImage:user?.image,
      doctorName: doctor.name,
      doctorId: doctor._id, // যদি ব্যাকেন্ডে আইডি লাগে
      patientName: patientName,
      date: date,
      time: time,
      phone: phone,
      gender: selectedGender,
      reason: reason,
    };
   try {
    // ⬇️ আপনার দেওয়া ফেচ রিকোয়েস্টের কোড
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingData)
    });

    const bookings = await res.json();

    console.log(bookings)

    // ⬇️ এখন যা যা করতে হবে (সফল/ব্যর্থ চেক করা)
    if (res.ok) {
      // ১. সফল হলে ইউজারকে নোটিফিকেশন দিন
      toast.success("🎉 Appointment Booked Successfully!")
      // (যদি React Toastify ব্যবহার করেন তবে লিখবেন: toast.success("🎉 Appointment Booked Successfully!"))

      // ২. সফল হওয়ার পর ফর্মের ইনপুটগুলো খালি করতে চাইলে:
      setPatientName("");
      setPhone("");
      setReason("");
      setIsOpen(false);
    } else {
      // ব্যাকেন্ড থেকে কোনো এরর মেসেজ পাঠালে তা দেখানো
      toast.error(bookings.message || "❌ Something went wrong. Please try again.")
    }

  } catch (error) {
    console.error("Fetch Error:", error);
    alert("❌ Server connection failed!");
  } finally {
    // 💡 ৩. কাজ শেষ, বাটন আবার "Confirm Booking" মুডে ফিরে আসবে
    setLoading(false); 
  }
};

  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button variant="secondary">Book Appointment</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Book Appointment</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                {doctor?.name}
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4" onSubmit={handleBookingSubmit}>
                  
                  {/* User Email */}
                  <TextField defaultValue={user?.email} className="w-full" name="email" type="email">
                    <Label>User Email</Label>
                    <Input disabled />
                  </TextField>

                  {/* Doctor Name */}
                  <TextField defaultValue={doctor?.name} className="w-full" name="name" type="text">
                    <Label>Doctor Name</Label>
                    <Input disabled />
                  </TextField>

                  {/* Patient Name - ফিক্সড: onChange অ্যাড করা হয়েছে */}
                  <TextField className="w-full" name="patient" type="text">
                    <Label>Patient Name</Label>
                    <Input 
                      placeholder="Enter patient name" 
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </TextField>

                  {/* Date and Time Row */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* Date Input - ফিক্সড: HTML5 ইনপুট ভ্যালু হ্যান্ডেল করা হয়েছে */}
                    <TextField isRequired className="w-full" name="date" type="date">
                      <Label className="text-sm font-semibold text-slate-700 mb-1 block">Date</Label>
                      <Input 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                      />
                    </TextField>

                    {/* Time Input - ফিক্সড: onChange অ্যাড করা হয়েছে */}
                    <TextField isRequired className="w-full" name="time" type="time">
                      <Label className="text-sm font-semibold text-slate-700 mb-1 block">Time</Label>
                      <Input 
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </TextField>
                  </div>

                  {/* Phone and Gender Row */}
                  <div className="grid grid-cols-2 gap-4 items-start w-full">
                    {/* Phone Input - ফিক্সড: onChange অ্যাড করা হয়েছে */}
                    <TextField isRequired className="w-full" name="phone" type="tel">
                      <Label>Phone</Label>
                      <Input 
                        placeholder="Enter your phone number" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </TextField>

                    {/* Gender Custom Dropdown */}
                    <div className="flex flex-col w-full relative">
                      <Label className="text-sm font-semibold text-slate-800 mb-1 block text-left">
                        Gender <span className="text-red-500">*</span>
                      </Label>
                      
                      <div
                        onClick={() => setIsGenderOpen(!isGenderOpen)}
                        className={`w-full h-11 bg-white border rounded-xl px-4 flex justify-between items-center cursor-pointer transition-all ${
                          isGenderOpen ? 'border-[#157a83] ring-1 ring-[#157a83]' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <span className="text-sm text-slate-700 font-medium">{selectedGender}</span>
                        <svg 
                          className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isGenderOpen ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>

                      {isGenderOpen && (
                        <div className="absolute top-[76px] left-0 w-full bg-white border border-slate-100 rounded-xl shadow-xl p-1.5 z-50 flex flex-col gap-0.5">
                          {genderOptions.map((option) => {
                            const isSelected = selectedGender === option.label;
                            return (
                              <div
                                key={option.id}
                                onClick={() => {
                                  setSelectedGender(option.label);
                                  setIsGenderOpen(false); 
                                }}
                                className={`w-full text-left cursor-pointer px-3 py-2 rounded-lg text-sm transition-all flex justify-between items-center ${
                                  isSelected 
                                    ? 'bg-[#d2f4f6] text-[#11646a] font-semibold' 
                                    : 'text-slate-600 hover:bg-slate-50'
                                }`}
                              >
                                <span>{option.label}</span>
                                {isSelected && (
                                  <svg className="w-4 h-4 text-[#11646a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                      <input type="hidden" name="gender" value={selectedGender} />
                    </div>
                  </div>

                  {/* Reason Field - ফিক্সড: onChange অ্যাড করা হয়েছে */}
                  <TextField className="w-full" name="message">
                    <Label>Reason</Label>
                    <Input 
                      placeholder="Enter your reason" 
                      value={reason}
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
                      {loading ? "Processing..." : "Confirm Booking"}
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

export default BookingCardModal;
