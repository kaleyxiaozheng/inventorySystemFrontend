/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Link as RouterLink } from 'react-router-dom';

export const breadcrumbNameMap = {
  '/inventory': 'Inventory',
  '/inventory/stocks': 'Stocks',
  '/inventory/stocks/stocksdetails': 'Stocks Details',
  '/inventory/stocks/stockslist': 'Stocks List',
  '/inventory/products': 'Products',
  '/inventory/purchaseorders': 'Purchase Orders',
  '/inventory/purchaseorders/salesorders': 'Sales Orders',
  '/inventory/purchaseorders/trackorders': 'Track Orders',
  '/suppliers': 'Suppliers',
  '/warehouses': 'Warehouses',
  '/employees': 'Employees',
  '/crm': 'CRM',
  '/crm/customers': 'Customers',
  '/shipping': 'Shipping',
  '/reportsandanalysis': 'Reports & Analysis',
  '/setting': 'Setting',
};

export function ListItemLink(props) {
  const { to, open, ...other } = props;
  const primary = breadcrumbNameMap[to];

  return (
    <li>
      <ListItem button component={RouterLink} to={to} {...other}>
        <ListItemText primary={primary} />
        {open != null ? open ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  open: PropTypes.bool,
  to: PropTypes.string.isRequired,
};