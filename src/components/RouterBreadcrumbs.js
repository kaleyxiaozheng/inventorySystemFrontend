/* eslint-disable no-nested-ternary */
import React from 'react';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Route, MemoryRouter } from 'react-router';
import { ListItemLink, breadcrumbNameMap } from './ListItemLink';
import { useStyles } from './UseStyles';
import { LinkRouter } from './LinkRouter'


export default function RouterBreadcrumbs() {
  const classes = useStyles();
  const [openInventory, setOpenInventory] = React.useState(true);
  const [openStocks, setOpenStocks] = React.useState(true);
  const [openPurchaseorders, setOpenPurchaseorders] = React.useState(true);
  const [openCrm, setOpenCrm] = React.useState(true);

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
        <Route>
          {({ location }) => {
            const pathnames = location.pathname.split('/').filter((x) => x);

            return (
              <Breadcrumbs aria-label="breadcrumb">
                <LinkRouter color="inherit" to="/">
                  Home
                </LinkRouter>
                {pathnames.map((value, index) => {
                  const last = index === pathnames.length - 1;
                  const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                  return last ? (
                    <Typography color="textPrimary" key={to}>
                      {breadcrumbNameMap[to]}
                    </Typography>
                  ) : (
                      <LinkRouter color="inherit" to={to} key={to}>
                        {breadcrumbNameMap[to]}
                      </LinkRouter>
                    );
                })}
              </Breadcrumbs>
            );
          }}
        </Route>
        <nav className={classes.lists} aria-label="folders">
          <List>
            <ListItemLink to="/inventory" open={openInventory} onClick={inventoryHandleClick} />
            <Collapse component="li" in={openInventory} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/inventory/stocks" open={openStocks} onClick={stocksHandleClick} className={classes.nested} />
                <Collapse component="li" in={openStocks} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/stocks/stocksdetails" className={classes.subnested} />
                  </List>
                </Collapse>
                <Collapse component="li" in={openStocks} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/stocks/stockslist" className={classes.subnested} />
                  </List>
                </Collapse>
                <ListItemLink to="/inventory/products" className={classes.nested} />
                <ListItemLink to="/inventory/purchaseorders" open={openPurchaseorders} onClick={purchaseorderssHandleClick} className={classes.nested} />
                <Collapse component="li" in={openPurchaseorders} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/purchaseorders/salesorders" className={classes.subnested} />
                  </List>
                </Collapse>
                <Collapse component="li" in={openPurchaseorders} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    <ListItemLink to="/inventory/purchaseorders/trackorders" className={classes.subnested} />
                  </List>
                </Collapse>
              </List>
            </Collapse>
            <ListItemLink to="/suppliers" />
            <ListItemLink to="/warehouses" />
            <ListItemLink to="/employees" />
            <ListItemLink to="/crm" open={openCrm} onClick={crmHandleClick} />
            <Collapse component="li" in={openCrm} timeout="auto" unmountOnExit>
              <List disablePadding>
                <ListItemLink to="/crm/customers" className={classes.nested} />
              </List>
            </Collapse>
            <ListItemLink to="/shipping" />
            <ListItemLink to="/reportsandanalysis" />
            <ListItemLink to="/setting" />
          </List>
        </nav>
      </div>
    </MemoryRouter>
  );
}