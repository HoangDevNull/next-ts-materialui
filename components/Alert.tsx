import { withStyles, createStyles } from '@material-ui/core/styles';

import { AlertProps, AlertTitleClassKey } from '@material-ui/lab';
import MuiAlert from '@material-ui/lab/Alert';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

interface Styles extends Partial<Record<AlertTitleClassKey, string>> {}

interface Props extends AlertProps {
  classes: Styles;
}

const Alert = withStyles((theme) =>
  createStyles({
    root: {
      flexDirection: 'row-reverse',
      height: 48,
      minWidth: 280,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    message: {
      fontSize: 13,
      letterSpacing: 0,
      lineHeight: `24px`,
      fontWeight: 400,
    },
    icon: {
      fontSize: 24,
    },
    standardSuccess: {
      color: theme.palette.success.main,
    },
    standardInfo: {
      color: theme.palette.info.main,
    },
    standardWarning: {
      color: theme.palette.warning.main,
    },
    standardError: {
      color: theme.palette.error.main,
    },
  })
)(({ classes, ...props }: Props) => {
  return (
    <MuiAlert
      iconMapping={{
        success: <CheckCircleOutlineIcon fontSize="inherit" />,
        error: <ErrorOutlineIcon fontSize="inherit" />,
      }}
      classes={classes}
      {...props}
    />
  );
});

export default Alert;
