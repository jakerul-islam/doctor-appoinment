
// import DoctorsCard from "@/components/DoctorsCard";
// import Searchbar from "@/components/Searchbar";






// const fetchAppointments=async()=>{
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appoinments`);
//     const data = await res.json();
//     return data || [];
// }
// const AllAppoinmentsPage =async () => {
    
//     const appointments = await fetchAppointments();
//     console.log(appointments)
//     return (
//         <div className="max-w-7xl mx-auto my-10">
//            <div className="text-center my-5 space-y-2">
//              <h2 className="text-3xl font-bold">All appointments</h2>
//             <p className=" text-muted">Find the right doctor for you</p>

//             <Searchbar></Searchbar>
//            </div>


//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                {
//                  appointments.map(appointment=><DoctorsCard appointment={appointment} key={appointment._id}></DoctorsCard>)
//                }
//             </div>
//         </div>
//     );
// };

// export default AllAppoinmentsPage;

import DoctorsCard from "@/components/DoctorsCard";
import Searchbar from "@/components/Searchbar";

// 🎯 ১. ফেচ করার সময় সার্চ কুয়েরি পাস করা হচ্ছে
const fetchAppointments = async (searchQuery = "") => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appoinments?search=${searchQuery}`, {
        cache: 'no-store' // জেনো প্রতিবার নতুন সার্চের ডাটা লাইভ আসে
    });
    const data = await res.json();
    return data || [];
};

// 🎯 ২. Server Component-এ Next.js ডিফল্ট searchParams প্রপ্স দেয়, সেটা রিসিভ করা হলো
const AllAppoinmentsPage = async ({ searchParams }) => {
    // URL থেকে search এর ভ্যালু নেওয়া হচ্ছে (যেমন: ?search=Shahadat)
    const search = (await searchParams)?.search || "";
    
    const appointments = await fetchAppointments(search);
    console.log(appointments);

    return (
        <div className="max-w-7xl mx-auto my-10">
           <div className="text-center my-5 space-y-2">
             <h2 className="text-3xl font-bold">All appointments</h2>
             <p className="text-muted">Find the right doctor for you</p>

             {/* 🎯 ৩. সার্চবারের ভেতর বর্তমান সার্চ ভ্যালুটি প্রপ্স হিসেবে পাঠানো হলো */}
             <Searchbar defaultValue={search} />
           </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                 appointments.map(appointment => (
                    <DoctorsCard appointment={appointment} key={appointment._id} />
                 ))
               }
            </div>
        </div>
    );
};

export default AllAppoinmentsPage;