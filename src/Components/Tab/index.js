import React from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// UI Components
import Profile from '../profile';
import RepoList from '../repoList';
import UsersList from '../usersList';

//  Icons
import { RiGitRepositoryLine } from 'react-icons/ri';
import { BsPeople, BsStar, BsPerson } from 'react-icons/bs';

// Default Style
import 'react-tabs/style/react-tabs.css';

// Override default Style
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
        <UsersList selectedComponent="follower" />
      </TabPanel>

      <TabPanel>
        <UsersList />
      </TabPanel>

      <TabPanel>
        <h2>Stars</h2>
      </TabPanel>
    </Tabs>
  </div>
);

export default TabNav;
