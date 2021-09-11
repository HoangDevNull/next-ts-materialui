import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import { FullScreenBackground } from 'components/FullScreenBackground';
import { MainGrid } from 'components/MainGrid';
import { LineGradient } from './LineGradient';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 269,
    width: '100%',
    background: theme.palette.secondary.main,
    textAlign: 'center',
  },
  bgBottom: {
    width: '100%',
    height: 11,
    background: theme.palette.colors.gradient.primary,
  },
  white: {
    color: theme.palette.common.white,
  },
}));

const Footer: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  return (
    <>
      <FullScreenBackground
        xlUrl="images/background-footer-XL.png"
        mdUrl="images/background-footer-XS.png"
        xsUrl="images/background-footer-MD.png"
      />
      <div className={classes.root}>
        <MainGrid>
          <Box pt="22px">
            <Image src="/images/logo/artway-logotype-light.svg" layout="intrinsic" height={38} width={167} />
          </Box>

          <Box mt="24px">
            <Typography variant="body1" className="white semibold">
              {t('footer.contract')}
            </Typography>
            <Typography variant="body1" className="white">
              contact@artway.fr
            </Typography>
          </Box>

          <Box bgcolor="rgba(255,255,255,0.5)" width="100%" height="1px" mt="37px" mb="30px" />

          <Typography align="center" variant="subtitle1" className="white">
            {t('footer.copy_right')}
          </Typography>
        </MainGrid>
      </div>
      <LineGradient />
    </>
  );
};

export default Footer;
