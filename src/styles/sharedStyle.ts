export const curveBottom = (background: string, radius = 3, zIndex: string | number = -1) => ({
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex,
    background,
    borderRadius: '50%',
    transformOrigin: 'bottom',
    transform: `translateX(-50%) scale(${radius})`,
  },
});

export const backgroundImage: any = {
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat',
  alignItems: 'center',
  display: 'flex',
};

export const centerFlex: any = {
  alignItems: 'center',
  justifyContents: 'center',
  display: 'flex',
};
