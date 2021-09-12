import { FC } from 'react';
import { Button, ButtonProps, SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MoneyIcon } from 'icons/MoneyIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: 0,
  },
  coinIcon: {
    fontSize: '13.28px !important',
  },
  coinText: {
    width: 32,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
    lineHeight: '24px',
  },
}));

export const CoinButton: FC<ButtonProps> = ({ children, ...props }) => {
  const classes = useStyles();
  return (
    <Button
      classes={{ iconSizeSmall: classes.root }}
      startIcon={<SvgIcon className={classes.coinIcon} component={MoneyIcon} />}
      size="small"
      {...props}
    >
      <span className={classes.coinText}>{children}</span>
    </Button>
  );
};
