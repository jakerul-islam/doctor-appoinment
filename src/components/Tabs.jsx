'use client'
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import MyBookings from './MyBookings';
import ProfileCard from './ProfileCard';


const TabsSection = ({bookingData}) => {
    return (
                    <Tabs>
    <TabList>
      <Tab>My Bookings</Tab>
      <Tab>Profile</Tab>
    </TabList>

    <TabPanel>
     <MyBookings bookingData={bookingData}></MyBookings>
    </TabPanel>
   
    <TabPanel>
       <ProfileCard></ProfileCard>
    </TabPanel>
  </Tabs>
    );
};

export default TabsSection;