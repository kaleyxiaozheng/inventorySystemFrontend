import React from "react";
import "../css/DashboardPage.css";
import { Link } from "react-router-dom";
const styles = {
  IndentationLevel1: { marginLeft: "1rem", color: "#000" },
  IndentationLevel2: { marginLeft: "2rem", color: "#000" },
  MenuContainer: {
    float: "left",
    textAlign: "left",
    fontWeight: 600,
    lineHeight: 2.5,
    flex: 0.2,
  },
  List: { listStyleType: "none" },
  Link: { color: "#000" },
  components: {
    height: 100,
    width: 200,
    backgroundColor: "#FFF",
    marginLeft: "25rem",
    marginBottom: "5rem",
  },
  componentRight: {
    height: 100,
    width: 200,
    backgroundColor: "#FFF",
    marginRight: "25rem",
    marginBottom: "5rem",
  },
  TextCentered:{padding:'40px'},
  leftContainer:{ height: "20rem", flex: 0.8, float: "left" },
  rightContainer:{ height: "20rem", flex: 0.8, float: "right" }
};
export const DashboardPage = () => (
  <div className="bodyArea">
    <h3>Dashboard</h3>
    <div style={styles.MenuContainer}>
      <ul style={styles.List}>
        <li>
          <Link to="/dashboard" style={styles.Link}>
            Dashboard
          </Link>{" "}
        </li>
        <li>
          <Link to="/dashboard" style={styles.Link}>
            Inventory
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel1}>
          <Link style={styles.Link} to="/dashboard">
            Stocks
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel2}>
          <Link style={styles.Link} to="/dashboard">
            Stocks Details
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel2}>
          <Link style={styles.Link} to="/dashboard">
            Stocks List
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel1}>
          <Link style={styles.Link} to="/dashboard">
            Products
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel1}>
          <Link style={styles.Link} to="/dashboard">
            Purchase Orders
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel2}>
          <Link style={styles.Link} to="/dashboard">
            Sales Orders
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel2}>
          <Link style={styles.Link} to="/dashboard">
            Track Orders
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Suppliers
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Warehouses
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Employees
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            CRM
          </Link>{" "}
        </li>
        <li style={styles.IndentationLevel2}>
          <Link style={styles.Link} to="/dashboard">
            Customers
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Shipping
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Reports & Analysis
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Setting
          </Link>{" "}
        </li>
        <li>
          <Link style={styles.Link} to="/dashboard">
            Logout
          </Link>{" "}
        </li>
      </ul>
    </div>
    <div style={styles.leftContainer}>
      <div style={styles.components}>
        <p style={styles.TextCentered}>Today's orders</p>
      </div>
      <div style={styles.components}>
        <p style={styles.TextCentered}>Today's Sales</p>
      </div>
      <div style={styles.components}>
        <p style={styles.TextCentered}>Barchart here</p>
      </div>
    </div>
    <div style={styles.rightContainer}>
      <div style={styles.componentRight}>
        <p style={styles.TextCentered}>Today's Sales</p>
      </div>
      <div style={styles.componentRight}>
        <p style={styles.TextCentered}>Today's Orders</p>
      </div>
      <div style={styles.componentRight}>
        <p style={styles.TextCentered}>Vehicles in warehouse</p>
      </div>
    </div>
  </div>
);
