import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { MainGrid } from 'components/MainGrid';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import { backgroundImage, curveBottom } from 'styles/sharedStyle';

const useStyles = makeStyles((theme) => ({
  bannerFaq: {
    minHeight: 702,
    backgroundImage: `url(images/Illustration/wavy-background-faq.svg)`,
    marginTop: -1,
    marginBottom: 77,
    zIndex: 1,
    color: '#fff',
    ...backgroundImage,
    [theme.breakpoints.down('sm')]: {
      minHeight: 391.5,
      paddingTop: 26,
      backgroundImage: 'none',
      ...curveBottom(theme.palette.secondary.main),
    },
    [theme.breakpoints.down('xs')]: {
      minHeight: 191.5,
    },
  },
  blobWrap: {
    position: 'absolute',
    width: 581.4,
    height: 620,
    top: -190,
    right: -45,
  },
  titleWrap: {
    maxWidth: 776,
    [theme.breakpoints.down('sm')]: {
      height: 'fit-content',
      textAlign: 'center',
      '& > h1': {
        fontSize: 32,
        lineHeight: '32px',
      },
    },
    [theme.breakpoints.down('xs')]: {
      '& > h1': {
        fontSize: 24,
        lineHeight: '32px',
      },
    },
  },
  imageWrap: {
    position: 'relative',
    width: 570.97,
    height: 479.87,
    marginLeft: -110,
    marginBottom: -110,
  },
}));

const FaqBanner: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  return (
    <section className={classes.bannerFaq}>
      <Hidden smDown>
        <div className={classes.blobWrap}>
          <Image src="/images/Illustration/blob-faq.svg" layout="fill" />
        </div>
      </Hidden>
      <MainGrid>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={7} lg={9} className={classes.titleWrap}>
            <Typography variant="h1">{t('faq.headline')}</Typography>
          </Grid>
          <Hidden smDown>
            <Grid item xs={false} md={5} lg={3}>
              <div className={classes.imageWrap}>
                <Image src="/images/Illustration/scene-4-faq.svg" layout="fill" />
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </MainGrid>
    </section>
  );
};

export default FaqBanner;
