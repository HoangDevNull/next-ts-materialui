import { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image';
import { MainGrid } from 'components/MainGrid';
import { FullScreenBackground } from 'components/FullScreenBackground';

const useStyles = makeStyles((theme) => ({
  imageWrap: {
    margin: 'auto',
    width: 433,
    [theme.breakpoints.down('md')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: '30%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      width: 267,
    },
    [theme.breakpoints.down('xs')]: {
      width: 174,
    },
  },
}));

const Banner: FC = () => {
  const clasess = useStyles();
  return (
    <FullScreenBackground
      xlUrl="images/background-header-XL.png"
      mdUrl="images/background-header-MD.png"
      xsUrl="images/background-header-XS.png"
    >
      <MainGrid>
        <div className={clasess.imageWrap}>
          <Image
            src="/images/landing/artway-insigne-logo.svg"
            layout="responsive"
            quality={100}
            width={433}
            height={328}
          />
        </div>
      </MainGrid>
    </FullScreenBackground>
  );
};

export default Banner;
