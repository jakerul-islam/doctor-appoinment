'use client'
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import MyBookings from './MyBookings';

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
      <h2>my profile</h2>
    </TabPanel>
  </Tabs>
    );
};

export default TabsSection;