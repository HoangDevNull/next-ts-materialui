import { FC } from 'react';
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import { useRouter } from 'next/router';
import { routes } from 'types/route';
import Image from 'next/image';
import { ButtonLink } from './ButtonLink';
import { LineGradient } from './LineGradient';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    height: 78,
    zIndex: 99,
    width: '100%',
  },
  container: {
    position: 'relative',
    height: '100%',
  },
  nav: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
  },
  logoWrap: {
    margin: '0px 88px',
    [theme.breakpoints.down('md')]: {
      margin: '0px 40px',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '0px 10px',
    },
  },
}));

const Navbar: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  const { asPath } = useRouter();
  return (
    <>
      <LineGradient />
      <div className={classes.root}>
        <Container className={classes.container}>
          <nav className={classes.nav}>
            <Box minWidth="81px" textAlign="center">
              <ButtonLink href={routes.home} active={asPath !== routes.home}>
                {t('header.platform')}
              </ButtonLink>
            </Box>
            <Box display="flex" alignItems="center" className={classes.logoWrap}>
              <Image src="/images/logo/artway-logotype-light.svg" layout="intrinsic" height={38} width={167} />
            </Box>

            <Box minWidth="81px" textAlign="center">
              <ButtonLink active={asPath !== routes.home} href="/xx">
                {t('header.out_faq')}
              </ButtonLink>
            </Box>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
