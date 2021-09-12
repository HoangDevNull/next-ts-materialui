import MuiDialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

export const Dialog = withStyles((theme): any => ({
  root: {
    zIndex: `1401 !important`, // Higher than appbar
    '& div.MuiPaper-rounded': {
      borderRadius: 16,
      [theme.breakpoints.down('sm')]: {
        borderRadius: 0,
      },
    },
  },
  paperWidthSm: {
    width: 320,
  },
}))(MuiDialog);

export const DialogContent = withStyles((theme) => ({
  root: {
    padding: 20,
  },
}))(MuiDialogContent);

export const DialogTitle = withStyles((theme) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    padding: '16px 21.5px',
    color: theme.palette.common.white,
  },
}))(MuiDialogTitle);
