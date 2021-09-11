import { FC } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useTypeSafeTranslation } from 'hooks/useTypeSafeTranslation';
import { useRouter } from 'next/router';
import { routes } from 'types/route';
import Image from 'next/image';
import Link from 'next/link';
import { MainGrid } from 'components/MainGrid';
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
    cursor: 'pointer',
    margin: '0px 88px',
    [theme.breakpoints.down('md')]: {
      margin: '0px 40px',
    },
  },
}));

const NavbarDeskTop: FC = () => {
  const classes = useStyles();
  const { t } = useTypeSafeTranslation();
  const { asPath } = useRouter();
  return (
    <>
      <LineGradient />
      <div className={classes.root}>
        <MainGrid className={classes.container}>
          <nav className={classes.nav}>
            <Box minWidth="81px" textAlign="center">
              <ButtonLink href={routes.platform} active={asPath === routes.home}>
                {t('header.platform')}
              </ButtonLink>
            </Box>
            <Link href={routes.landingPage} passHref>
              <Box display="flex" alignItems="center" className={classes.logoWrap}>
                <Image src="/images/logo/artway-logotype-light.svg" layout="intrinsic" height={38} width={167} />
              </Box>
            </Link>

            <Box minWidth="81px" textAlign="center">
              <ButtonLink href={routes.faq} active={asPath === routes.faq}>
                {t('header.out_faq')}
              </ButtonLink>
            </Box>
          </nav>
        </MainGrid>
      </div>
    </>
  );
};

export default NavbarDeskTop;
