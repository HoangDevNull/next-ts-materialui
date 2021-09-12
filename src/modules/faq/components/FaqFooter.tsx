import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { MainGrid } from 'components/MainGrid';
import { Box, Button, Typography } from '@material-ui/core';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 89,
  },
  title: {
    color: '#1A0D7C',
  },
  buttonWrap: {
    '& button': {
      width: 280,
    },
    '& button:nth-child(1)': {
      marginRight: 30,
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
      jutifyContents: 'center',
      '& button': {
        width: '100%',
      },
      '& button:nth-child(1)': {
        marginRight: 0,
        marginBottom: 16,
      },
    },
  },
}));

const FaqFooter: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  return (
    <MainGrid className={classes.root}>
      <Typography align="center" variant="h1" className={classes.title}>
        Prêt à rejoindre l’aventure ?
      </Typography>

      <Box my="28px">
        <Typography align="center" variant="h3">
          Faîtes partie des premiers à explorer Artway.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" pb="81px" className={classes.buttonWrap}>
        <Button size="large" variant="contained" color="primary">
          {t('header.explore')}
        </Button>
        <Button size="large" variant="outlined" color="secondary">
          {t('header.sign_in')}
        </Button>
      </Box>
    </MainGrid>
  );
};

export default FaqFooter;
