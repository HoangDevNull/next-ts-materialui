import { ThemeOptions } from '@material-ui/core/styles';
import colors from './colors';

const overrides: ThemeOptions = {
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        textTransform: 'unset',
        borderRadius: 999,
        maxHeight: 40,
        '&$disabled': {
          background: '#566266',
          cursor: 'not-allowed',
          pointerEvents: 'inherit',
          boxShadow: 'none !important',
        },
      },
      contained: {
        boxShadow: 'unset',
        backgroundColor: '#ffffff',
      },
      outlined: {
        borderColor: '#ffffff',
      },
      outlinedSecondary: {
        '&:hover': {
          backgroundColor: colors.main.secondary,
          color: '#ffffff',
        },
      },
      containedPrimary: {
        color: '#ffffff',
        background: colors.gradient.primary,
        backgroundColor: 'unset',
        '&:hover': {
          boxShadow: '0 2px 40px 0 #E34D76, 0 6px 17px 2px rgba(227,77,118,0.5)',
        },
      },
      sizeLarge: {
        fontSize: '1rem',
        padding: '9.5px 22px',
        minWidth: 140,
        letterSpacing: 0,
        maxHeight: 48,
      },
      sizeSmall: {
        fontSize: '0.8125rem',
        padding: '0px 8px',
        minWidth: 57,
        maxHeight: 23,
        letterSpacing: 0,
      },
      iconSizeSmall: {
        // marginRight: 0,
      },
      containedSizeLarge: {
        fontSize: '0.875rem',
        '&:hover': {
          boxShadow: '0 2px 40px 0 #E34D76, 0 6px 17px 2px rgba(227,77,118,0.5)',
        },
      },
      containedSizeSmall: {
        '&:hover': {
          boxShadow: '0 2px 40px 0 rgba(227,77,118,0.5), 0 6px 17px 2px rgba(227,77,118,0.5)',
        },
      },
    },
    // End Button
    MuiIconButton: {
      root: {
        width: 42,
        height: 42,
      },
    },
    MuiLink: {
      root: {
        color: '#5265E3',
      },
    },
    // End Link
    MuiInputBase: {
      root: {
        maxHeight: 48,
      },
    },
    MuiOutlinedInput: {
      input: {
        paddingTop: 14.5,
        paddingBottom: 14.5,
        paddingLeft: 13,
      },
    },
    // End Outline input
    MuiSelect: {
      select: { minWidth: 200 },
      icon: {
        color: '#E2497C',
        userSelect: 'none',
        pointerEvents: 'none',
      },
    },
    MuiMenu: {
      paper: {
        marginTop: 10,
        border: '1px solid #CAD8E6',
      },
      list: {
        paddingTop: 0,
        paddingBottom: 0,
        '& li': {
          color: colors.main.secondary,
        },
        '& li:hover': {
          background: '#E6E8F0',
        },
        '& li.Mui-selected': {
          background: '#E6E8F0',
          fontWeight: 'bold',
        },
        '& li.Mui-selected:hover': {
          background: '#E6E8F0',
        },
      },
    },
    // End select
    MuiTooltip: {
      popper: {
        fontSize: 13,
      },
      arrow: {
        color: colors.main.secondary,
      },
      tooltip: {
        backgroundColor: colors.main.secondary,
      },
    },
    // End tooltip
    MuiDivider: {
      root: {
        opacity: 0.5,
        backgroundColor: '#E6E8F0',
      },
    },
  },
};

export default overrides;
