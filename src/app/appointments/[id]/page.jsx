import DoctorDetails from "@/components/DoctorDetails";


const DoctorsDetailsPage =async ({params}) => {
    const {id}= await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appoinments/${id}`);
    const doctor = await res.json();
   
    return (
        <div className="max-w-7xl mx-auto my-15">
           
          <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
        </div>
    );
};

export default DoctorsDetailsPage;