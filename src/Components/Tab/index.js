import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { RiGitRepositoryLine } from 'react-icons/ri';
import { BsPeople, BsStar, BsPerson } from 'react-icons/bs';

import Profile from '../Profile';
import RepoList from '../RepoList';

// Import Default Tabs STyle
import 'react-tabs/style/react-tabs.css';

// Override Default Tabs Style
import './style.css';

const TabNav = ({ className }) => (
  <div className={className}>
    <Tabs>
      <TabList>
        <Tab>
          <div className="tab__logo">
            <BsPerson />
          </div>

          <span className="tab__name">Profile</span>
        </Tab>
        <Tab>
          <div className="tab__logo">
            <RiGitRepositoryLine />
          </div>
          <span className="tab__name">Repositories</span>
        </Tab>
        <Tab>
          <div className="tab__logo">
            <BsPeople />
          </div>
          <span className="tab__name">Followers</span>
        </Tab>
        <Tab>
          <div className="tab__logo">
            <RiGitRepositoryLine />
          </div>
          <span className="tab__name">Following</span>
        </Tab>
        <Tab>
          <div className="tab__logo">
            <BsStar />
          </div>
          <span className="tab__name">Stars</span>
        </Tab>
      </TabList>

      <TabPanel>
        <Profile />
      </TabPanel>
      <TabPanel>
        <RepoList />
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

export default TabNav;
