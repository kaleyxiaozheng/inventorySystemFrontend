import React from 'react';
import '../css/DashboardPage.css';
import { NaviBar } from './NaviBar';
import { DashboardCard } from './Card';

export const DashboardPage = () => (
  <div className="bodyArea">
    <div className="lcol breadcrumbs">
      <NaviBar />
    </div>
    <div className="lcol dashboardCard ">
        <DashboardCard />
    </div>
  </div>
)