import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

interface Props extends SwitchProps {
  classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 60,
      height: 37,
      padding: 0,
    },
    switchBase: {
      padding: 2,
      '&$checked': {
        transform: 'translateX(23px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: theme.palette.success.main,
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: theme.palette.success.main,
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 33,
      height: 33,
      border: `1px solid #E5E5E5`,
    },
    track: {
      borderRadius: 36,
      border: `2px solid #E5E5E5`,
      backgroundColor: theme.palette.common.white,
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  })
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

export default IOSSwitch;
