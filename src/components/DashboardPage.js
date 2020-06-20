import React, { Component } from "react";
import "../css/DashboardPage.css";
import NaviBar from "./NaviBar";
import { DashboardCardPage } from "./DashboardCardPage";
import { Stocksdetails } from "./Stocksdetails";
import { Stockslist } from "./Stockslist";
import { Products } from "./Products";
import { SalesOrders } from "./SalesOrders";
import { TractOrders } from "./TractOrders";
import { Suppliers } from "./Suppliers";
import { Warehouses } from "./Warehouses";
import { Employees } from "./Employees";
import { Customers } from "./Customers";
import { Shipping } from "./Shipping";
import { RandA } from "./RandA";
import { Setting } from "./Setting";

const pageMapping = {
  mainDashboard: <DashboardCardPage />,
  stocksdetails: <Stocksdetails />,
  stockslist: <Stockslist />,
  products: <Products />,
  salesorders: <SalesOrders />,
  trackorders: <TractOrders />,
  suppliers: <Suppliers />,
  warehouses: <Warehouses />,
  employees: <Employees />,
  customers: <Customers />,
  shipping: <Shipping />,
  reportsandanalysis: <RandA />,
  setting: <Setting />,
};

export class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "mainDashboard" };
  }

  switchPages = (props) => {
    this.setState({ page: props });
  };

  render() {
    return (
      <div className="dashboard-container">
        <div className="item navi-bar breadcrumbs">
          <NaviBar switchPages={this.switchPages} />
        </div>
        <div className="item content ">{pageMapping[this.state.page]}</div>
      </div>
    );
  }
}
