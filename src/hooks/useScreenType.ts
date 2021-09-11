import useMediaQuery from '@material-ui/core/useMediaQuery';

export const useScreenType = () => {
  const isLarge = useMediaQuery('(min-width:1230px)');
  const isMedium = useMediaQuery('(min-width:960px)');
  const isSmall = useMediaQuery('(min-width:577px)');

  if (isLarge) return 'lg';

  if (isMedium) return 'md';

  if (isSmall) return 'sm';

  return 'xl';
};
