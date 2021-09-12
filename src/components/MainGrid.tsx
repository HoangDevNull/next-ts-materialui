import { withStyles } from '@material-ui/core/styles';

import { Container } from '@material-ui/core';

export const MainGrid = withStyles((theme) => ({
  root: {
    paddingLeft: 15,
    paddingRight: 15,
  },
}))(Container);
