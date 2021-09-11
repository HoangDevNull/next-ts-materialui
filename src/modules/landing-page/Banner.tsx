import { FC } from 'react';
import { Box } from '@material-ui/core';
import Image from 'next/image';
import { MainGrid } from 'components/MainGrid';
import { FullScreenBackground } from 'components/FullScreenBackground';

const Banner: FC = () => {
  return (
    <FullScreenBackground
      xlUrl="images/background-header-XL.png"
      mdUrl="images/background-header-MD.png"
      xsUrl="images/background-header-XS.png"
    >
      <MainGrid>
        <Box width={{ xs: 300, sm: 367, md: 400, lg: 433 }} m="auto">
          <Image
            src="/images/landing/artway-insigne-logo.svg"
            layout="responsive"
            quality={100}
            width={433}
            height={328}
          />
        </Box>
      </MainGrid>
    </FullScreenBackground>
  );
};

export default Banner;
