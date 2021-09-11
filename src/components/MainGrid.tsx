import { withStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

export const MainGrid = withStyles((theme) => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      paddingRight: 20,
    },
  },
}))(Container);
