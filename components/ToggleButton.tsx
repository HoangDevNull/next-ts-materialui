import { withStyles } from '@material-ui/core/styles';
import MuiToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import MuiToggleButton from '@material-ui/lab/ToggleButton';

export const ToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    border: `1px solid ${theme.palette.secondary.main}`,
    '&:not(:first-child)': {
      width: 140,
      height: 48,
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      width: 140,
      height: 48,
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    },
  },
}))(MuiToggleButtonGroup);

export const ToggleButton = withStyles((theme) => ({
  root: {
    textTransform: 'unset',
    lineHeight: `24px`,
  },
  selected: {
    color: `${theme.palette.common.white}!important`,
    background: theme.palette.colors.gradient.dark,
  },
}))(MuiToggleButton);
