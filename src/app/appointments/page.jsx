import DoctorsCard from "@/components/DoctorsCard";





const fetchAppointments=async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/appoinments`);
    const data = await res.json();
    return data || [];
}
const AllAppoinmentsPage =async () => {
    const appointments = await fetchAppointments();
    console.log(appointments)
    return (
        <div className="max-w-7xl mx-auto">
            <h2>All appointments</h2>
            <p>Find the right doctor for you</p>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {
                 appointments.map(appointment=><DoctorsCard appointment={appointment} key={appointment._id}></DoctorsCard>)
               }
            </div>
        </div>
    );
};

export default AllAppoinmentsPage;