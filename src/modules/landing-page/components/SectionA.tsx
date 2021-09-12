import { FC } from 'react';
import { Box, Button, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MainGrid } from 'components/MainGrid';
import Image from 'next/image';

import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import Carousel from './Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },
  bgTop: {
    position: 'relative',
    height: 271,
    marginTop: -270,
    width: '100%',
    background: 'linear-gradient(0deg, #FEFEFE 0%, rgba(240,138,68,0.07) 100%, rgba(239,129,53,0) 100%);',
  },
  contentWrap: {
    paddingTop: 40,
    maxWidth: 776,
  },
  buttonWrap: {
    '& button': {
      width: 280,
    },
    '& button:nth-child(1)': {
      marginRight: 30,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'fixed',
      background: theme.palette.common.white,
      borderRadius: '30px 30px 0 0',
      height: 180,
      width: '100%',
      left: 0,
      bottom: -1,
      flexDirection: 'column',
      alignItems: 'center',
      jutifyContents: 'center',
      padding: '34px 20px 0px 20px',
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

const SectionA: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();

  return (
    <>
      <Hidden smDown>
        <div className={classes.bgTop} />
      </Hidden>

      <MainGrid className={classes.root}>
        <div className={classes.contentWrap}>
          <Carousel />

          <Box display="flex" mt="80px" pb="181px" className={classes.buttonWrap}>
            <Button size="large" variant="contained" color="primary">
              {t('header.explore')}
            </Button>
            <Button size="large" variant="outlined" color="secondary">
              {t('header.sign_in')}
            </Button>
          </Box>
        </div>
        <Hidden smDown>
          <Box zIndex="-1" position="absolute" right={-140} top={-210} width="570.41px">
            <Image src="/images/Illustration/scene-landing.svg" layout="responsive" width={570.41} height={714} />
          </Box>
        </Hidden>
      </MainGrid>
    </>
  );
};

export default SectionA;
