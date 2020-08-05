import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Profile from '../Profile';

import 'react-tabs/style/react-tabs.css';

const TabNav = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Profile</Tab>
          <Tab>Repositories</Tab>
          <Tab>Followers</Tab>
          <Tab>Followings</Tab>
          <Tab>Stars</Tab>
        </TabList>

        <TabPanel>
          <h2>Profile</h2>
          <Profile />
        </TabPanel>
        <TabPanel>
          <h2>Repositories</h2>
        </TabPanel>
        <TabPanel>
          <h2>Followers</h2>
        </TabPanel>
        <TabPanel>
          <h2>Followings</h2>
        </TabPanel>
        <TabPanel>
          <h2>Stars</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabNav;
