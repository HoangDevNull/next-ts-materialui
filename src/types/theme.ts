export interface IPalette {
  gradient: {
    primary: string;
    secondary: string;
    common: string;
    light: string;
    dark: string;
  };
  main: {
    primary: string;
    secondary: string;
    tertiary: string;
    accent: string;
    success: string;
    error: string;
    background: string;
    foreground: string;
  };
  secondary: { '100': string; '200': string; '300': string; '400': string; '500': string; '600': string };
  grey: { '100': string; '200': string; '300': string; '400': string };
  elevation: { hover: string; card: string };
}
