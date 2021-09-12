import { makeStyles } from '@material-ui/core/styles';
import MuiIconButton from '@material-ui/core/IconButton';
import { FC, MouseEventHandler, useMemo } from 'react';
import { SvgIcon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contained: {
    background: theme.palette.colors.gradient.primary,
    '&:hover': {
      boxShadow: '0 2px 40px 0 rgba(227,77,118,0.5), 0 6px 17px 2px rgba(227,77,118,0.5)',
    },
  },
  iconSizeSmall: {
    fontSize: '1.21rem',
  },
  iconSizeInherit: {
    fontSize: '1.5285714285714284rem',
  },
}));

interface IconButtonProps {
  htmlColor?: string;
  fontSize?: 'default' | 'inherit' | 'large' | 'medium' | 'small';
  icon: any;
  contained?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  svgClassName?: string;
  darkTheme?: boolean;
}

export const IconButton: FC<IconButtonProps> = ({
  svgClassName,
  onClick,
  htmlColor,
  fontSize = 'inherit',
  darkTheme,
  contained,
  icon,
}) => {
  const classes = useStyles();

  const color = useMemo(() => {
    let light = '#ffffff';
    let dark = '#09223D';
    if (darkTheme) {
      dark = '#ffffff';
      light = '#09223D';
    }

    if (htmlColor) return htmlColor;
    return contained ? light : dark;
  }, [htmlColor, contained, darkTheme]);

  return (
    <MuiIconButton
      onClick={onClick}
      color="primary"
      classes={{
        root: contained ? classes.contained : '',
      }}
    >
      <SvgIcon
        className={svgClassName}
        classes={{
          fontSizeSmall: classes.iconSizeSmall,
          fontSizeInherit: classes.iconSizeInherit,
        }}
        htmlColor={color}
        fontSize={fontSize}
        component={icon}
      />
    </MuiIconButton>
  );
};
