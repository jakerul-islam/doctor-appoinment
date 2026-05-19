'use client'
import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const DashBoardPage = () => {
    return (
        <div className='container mx-auto mt-'>
             <Tabs>
    <TabList>
      <Tab>My Bookings</Tab>
      <Tab>Profile</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default DashBoardPage;