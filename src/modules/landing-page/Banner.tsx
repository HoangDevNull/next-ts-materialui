import { FC } from 'react';
import { Container, Box } from '@material-ui/core';
import Image from 'next/image';
import FullWidthBackground from 'components/FullWidthBackground';

const Banner: FC = () => {
  return (
    <FullWidthBackground
      xlUrl="images/background-header-XL.png"
      mdUrl="images/background-header-XS.png"
      xsUrl="images/background-header-MD.png"
    >
      <Container>
        <Box width={{ xs: 300, sm: 367, md: 400, lg: 433 }} m="auto">
          <Image
            src="/images/landing/artway-insigne-logo.svg"
            layout="responsive"
            quality={100}
            width={433}
            height={328}
          />
        </Box>
      </Container>
    </FullWidthBackground>
  );
};

export default Banner;
