
import MyBookings from '@/components/MyBookings';
import TabsSection from '@/components/Tabs';
import { auth } from '@/lib/auth';

import { headers } from 'next/headers';
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DashBoardPage =async () => {

     const session = await auth.api.getSession({
    headers: await headers() // you need to pass the headers object.
    
})
const user = session?.user
console.log(user,'from dashboard')

      const res =await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`)
      const bookingData = await res.json()

      console.log(bookingData)

    return (
        <div className='container mx-auto mt-10'>
          <TabsSection bookingData={bookingData} ></TabsSection>
        </div>
    );
};

export default DashBoardPage;