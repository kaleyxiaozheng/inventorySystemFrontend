/* eslint-disable no-nested-ternary */
import React from 'react';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import { MemoryRouter } from 'react-router';
import { ListItemLink } from './ListItemLink';
import { navibarUseStyles } from './UseStyles';
import '../css/NaviBar.css';

export default function NaviBar(props) {
  const classes = navibarUseStyles();
  const [openInventory, setOpenInventory] = React.useState(false);
  const [openStocks, setOpenStocks] = React.useState(false);
  const [openPurchaseorders, setOpenPurchaseorders] = React.useState(false);
  const [openCrm, setOpenCrm] = React.useState(false);

  const inventoryHandleClick = () => {
    setOpenInventory((prevOpen) => !prevOpen);
  };

  const stocksHandleClick = () => {
    setOpenStocks((prevOpen) => !prevOpen);
  };

  const purchaseorderssHandleClick = () => {
    setOpenPurchaseorders((prevOpen) => !prevOpen);
  };

  const crmHandleClick = () => {
    setOpenCrm((prevOpen) => !prevOpen);
  };

  return (
    <MemoryRouter initialEntries={['/Inventory']} initialIndex={0}>
      <div className={classes.root}>
        <ListItemLink to="/dashboard" onClick={() => props.switchPages("mainDashboard")} />
        <nav className={classes.lists} aria-label="folders">
          <List>
            <ListItemLink to="/inventory" open={openInventory} onClick={inventoryHandleClick} />
            <Collapse component="li" in={openInventory} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/inventory/stocks" open={openStocks} onClick={stocksHandleClick} className={classes.nested} />
                <Collapse component="li" in={openStocks} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/stocks/stocksdetails" onClick={() => props.switchPages("stocksdetails")} className={classes.subnested} />
                  </List>
                </Collapse>
                <Collapse component="li" in={openStocks} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/stocks/stockslist" onClick={() => props.switchPages("stockslist")} className={classes.subnested} />
                  </List>
                </Collapse>
                <ListItemLink to="/inventory/products" onClick={() => props.switchPages("products")} className={classes.nested} />
                <ListItemLink to="/inventory/purchaseorders" open={openPurchaseorders} onClick={purchaseorderssHandleClick} className={classes.nested} />
                <Collapse component="li" in={openPurchaseorders} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/purchaseorders/salesorders" onClick={() => props.switchPages("salesorders")} className={classes.subnested} />
                  </List>
                </Collapse>
                <Collapse component="li" in={openPurchaseorders} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/purchaseorders/trackorders" onClick={() => props.switchPages("trackorders")} className={classes.subnested} />
                  </List>
                </Collapse>
              </List>
            </Collapse>
            <ListItemLink to="/suppliers" onClick={() => props.switchPages("suppliers")} />
            <ListItemLink to="/warehouses" onClick={() => props.switchPages("warehouses")} />
            <ListItemLink to="/employees" onClick={() => props.switchPages("employees")} />
            <ListItemLink to="/crm" open={openCrm} onClick={crmHandleClick} />
            <Collapse component="li" in={openCrm} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/crm/customers" onClick={() => props.switchPages("customers")} className={classes.nested} />
              </List>
            </Collapse>
            <ListItemLink to="/shipping" onClick={() => props.switchPages("shipping")} />
            <ListItemLink to="/reportsandanalysis" onClick={() => props.switchPages("reportsandanalysis")} />
            <ListItemLink to="/setting" onClick={() => props.switchPages("setting")} />
          </List>
        </nav>
      </div>
    </MemoryRouter>
  );
}