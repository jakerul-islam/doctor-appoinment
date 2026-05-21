// import DoctorDetails from "@/components/DoctorDetails";
// import { auth } from "@/lib/auth";
// import { headers } from "next/headers";

// const DoctorsDetailsPage = async ({ params }) => {
//   const { id } = params;

//   const headerStore =await headers();

//   const session = await auth.api.getSession({
//     headers: headerStore,
//   });

//   if (!session?.user) {
//     throw new Error("Unauthorized");
//   }

//   const token =
//     session?.session?.token ||
//     session?.session?.accessToken ||
//     session?.token;

//   if (!token) {
//     throw new Error("Token not found");
//   }

//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/appoinments/${id}`,
//     {
//       headers: {
//         authorization: `Bearer ${token}`,
//       },
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//   let message = "Request failed";

//   try {
//     const data = await res.json();
//     message = data?.message || message;
//   } catch (e) {
//     message = await res.text();
//   }

//   throw new Error(message);
// }
//   const doctor = await res.json();

//   return (
//     <div className="max-w-7xl mx-auto my-15">
//       <DoctorDetails doctor={doctor} />
//     </div>
//   );
// };

// export default DoctorsDetailsPage;


import DoctorDetails from "@/components/DoctorDetails";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const DoctorsDetailsPage =async ({params}) => {
    const {id}= await params;
   const {token }= await auth.api.getToken({headers: await headers()})
   console.log(token ,'from details')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appoinments/${id}`,{
        headers:{
            authorization: `Bearer ${token}`
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