import DoctorDetails from "@/components/DoctorDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DoctorsDetailsPage =async ({params}) => {
    const {id}= await params;
   const {token }= await auth.api.getToken({headers: await headers()})
   console.log(token ,'from details')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appoinments/${id}`,{
        headers:{
            "Authorization": `Bearer ${token}`
        }
    });
    const doctor = await res.json();
   
    return (
        <div className="max-w-7xl mx-auto my-15">
           
          <DoctorDetails key={doctor._id} doctor={doctor}></DoctorDetails>
        </div>
    );
};

export default DoctorsDetailsPage;