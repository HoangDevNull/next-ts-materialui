import { FC } from 'react';
import { Box, Button } from '@material-ui/core';
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '17px 0',
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
            <Link href={routes.landingPage} passHref>
              <Box width="310px" display="flex" alignItems="center" className="cursor">
                <Image src="/images/logo/artway-logotype-light.svg" layout="intrinsic" height={38} width={166} />
              </Box>
            </Link>
            <Box display="flex" justifyContent="space-between" width="223px">
              <ButtonLink href={routes.faq} active={asPath === routes.faq}>
                {t('header.out_faq')}
              </ButtonLink>

              <ButtonLink href={routes.platform} active={asPath === routes.home}>
                Facebook
              </ButtonLink>

              <ButtonLink href={routes.faq} active={asPath === routes.faq}>
                Twitter
              </ButtonLink>
            </Box>

            <Box display="flex" alignItems="center">
              <Box width="150px">
                <Button fullWidth variant="contained" color="primary">
                  {t('header.explore')}
                </Button>
              </Box>
              <Box ml="10px" width="150px">
                <Button fullWidth variant="outlined" color="default">
                  <span className="white">{t('header.sign_in')}</span>
                </Button>
              </Box>
            </Box>
          </nav>
        </MainGrid>
      </div>
    </>
  );
};

export default NavbarDeskTop;
