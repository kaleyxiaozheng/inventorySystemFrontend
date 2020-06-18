import { makeStyles } from '@material-ui/core/styles';

export const navibarUseStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: '15px',
  },
  lists: {
    marginTop: theme.spacing(1),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  subnested: {
    paddingLeft: theme.spacing(8),
  },
  dashboard: {
    fontWeight: 'bolder !important',
  },
}));