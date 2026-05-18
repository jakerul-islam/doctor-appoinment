import Banner from "@/components/Banner";
import Testimonials from "@/components/Testimonials";
import TopRatedDoctors from "@/components/TopRatedDoctors";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
  <div>
   <Banner></Banner>

   <TopRatedDoctors></TopRatedDoctors>
   <WhyChoose></WhyChoose>
   <Testimonials></Testimonials>
  </div>
  );
}
