import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, InputAdornment, SvgIcon, TextField } from '@material-ui/core';
import { Dialog, DialogContent, DialogTitle } from 'components/Dialog';
import { useScreenType } from 'hooks/useScreenType';
import { IconButton } from 'components/IconButton';
import { curveBottom } from 'styles/sharedStyle';
import { LeftIcon } from 'icons/LeftIcon';
import { UserIcon } from 'icons/UserIcon';
import Image from 'next/image';

const useStyles = makeStyles((theme) => ({
  curv: {
    ...curveBottom(theme.palette.secondary.main, 3),
  },
  titleHeader: {
    fontSize: 36,
  },
}));

const SignInModal = () => {
  const classes = useStyles();
  const screenType = useScreenType();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen={screenType === 'sm'}
      maxWidth={screenType === 'sm' ? 'lg' : 'sm'}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle disableTypography>
        <div className={classes.curv} />
        <IconButton htmlColor="#ffffff" fontSize="small" icon={LeftIcon} />
        <Box mb="20px" display="flex" justifyContent="center">
          <Typography variant="h2" className={classes.titleHeader} align="center">
            Hello ! &nbsp;
          </Typography>
          <Image src="/images/smile-emoji.png" width={40} height={40} layout="fixed" />
        </Box>
      </DialogTitle>
      <DialogContent>
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SvgIcon fontSize="small" component={UserIcon} />
              </InputAdornment>
            ),
          }}
          fullWidth
          variant="outlined"
        />
      </DialogContent>
    </Dialog>
  );
};

export default memo(SignInModal);
