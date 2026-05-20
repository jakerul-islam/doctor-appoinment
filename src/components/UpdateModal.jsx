import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Pencil } from "lucide-react";
import React from "react";

const UpdateModal = ({ booking }) => {
    console.log(booking)
  return (
    <Modal>
      <Button
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
                <form
                  className="flex flex-col gap-4"
                  
                >
                 
                

                  {/* Doctor Name */}
                  <TextField
                    defaultValue={booking.doctorName}
                    className="w-full"
                    name="name"
                    type="text"
                  >
                    <Label>Doctor Name</Label>
                    <Input disabled />
                  </TextField>

                  <TextField className="w-full" name="patient" type="text">
                    <Label>Patient Name</Label>
                    <Input
                      placeholder="Enter patient name"
                      value={booking.patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                    />
                  </TextField>

                  {/* Date and Time Row */}
                  <div className="grid grid-cols-2 gap-4">
                    
                    <TextField
                    defaultValue={booking.time}
                      isRequired
                      className="w-full"
                      name="date"
                      type="date"
                    >
                      <Label className="text-sm font-semibold text-slate-700 mb-1 block">
                        Date
                      </Label>
                      <Input
                        value={booking.date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </TextField>

                    {/* Time Input - ফিক্সড: onChange অ্যাড করা হয়েছে */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="time"
                      type="time"
                    >
                      <Label className="text-sm font-semibold text-slate-700 mb-1 block">
                        Time
                      </Label>
                      <Input
                        value={booking.time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </TextField>
                  </div>

                  {/* Phone and Gender Row */}
                  <div className="grid grid-cols-2 gap-4 items-start w-full">
                    {/* Phone Input - ফিক্সড: onChange অ্যাড করা হয়েছে */}
                    <TextField
                      isRequired
                      className="w-full"
                      name="phone"
                      type="tel"
                    >
                      <Label>Phone</Label>
                      <Input
                        placeholder="Enter your phone number"
                        value={booking.phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </TextField>

                  
                  </div>

                  
                  <TextField className="w-full" name="message">
                    <Label>Reason</Label>
                    <Input
                      placeholder="Enter your reason"
                      value={booking.reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </TextField>

                  {/* Modal Footer Submit Button */}
                  <Modal.Footer className="p-0 mt-2">
                    <Button
                      className="w-full rounded-xl bg-[#157a83] text-white font-semibold h-11 hover:bg-[#11646a]"
                      type="submit"
                    >
                      confirm update
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
