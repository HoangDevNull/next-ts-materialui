import { FC, useState } from 'react';
import { Box, Hidden, MobileStepper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '0px 20px',
      position: 'absolute',
      height: 200,
      top: -(200 + 180 + 36),
      left: 0,
      width: '100%',
      background: 'rgba(0,0,0,0.1)',
    },
  },
  description: {
    marginTop: 60,
    maxWidth: 689,
    [theme.breakpoints.down('sm')]: {
      maxWidth: 'none',
      color: '#fff',
      textAlign: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 13,
    },
  },
  stepper: {
    marginTop: 30,
    padding: 0,
    background: 'none',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      margin: '0 auto',
      width: 'fit-content',
    },
  },
  dot: {
    height: 9,
    width: 9,
    backgroundColor: 'transparent',
    border: `1px solid #09223D`,
    [theme.breakpoints.down('sm')]: {
      border: `1px solid #ffffff`,
    },
  },
  dotActive: {
    backgroundColor: '#09223D',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: '#ffffff',
    },
  },
}));

const Carousel: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const contents = [
    {
      title: t('landingPage.section_1.title_1'),
      description: t('landingPage.section_1.description_1'),
    },
    {
      title: t('landingPage.section_1.title_2'),
      description: t('landingPage.section_1.description_2'),
    },
    {
      title: t('landingPage.section_1.title_3'),
      description: t('landingPage.section_1.description_3'),
    },
    {
      title: t('landingPage.section_1.title_4'),
      description: t('landingPage.section_1.description_4'),
    },
    {
      title: t('landingPage.section_1.title_5'),
      description: t('landingPage.section_1.description_5'),
    },
    {
      title: t('landingPage.section_1.title_6'),
      description: t('landingPage.section_1.description_6'),
    },
  ];

  return (
    <div className={classes.root}>
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange} enableMouseEvents>
        {contents.map((step, index) => (
          <div key={step.description}>
            {Math.abs(activeStep - index) <= 2 ? (
              <div>
                <Hidden smDown>
                  <Typography variant="h1">{step.title}</Typography>
                </Hidden>

                <Typography variant="h4" className={classes.description}>
                  {step.description}
                </Typography>
              </div>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        variant="dots"
        steps={6}
        position="static"
        activeStep={activeStep}
        classes={{
          root: classes.stepper,
          dot: classes.dot,
          dotActive: classes.dotActive,
        }}
        nextButton={null}
        backButton={null}
      />
    </div>
  );
};

export default Carousel;
