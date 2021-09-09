import * as createPalette from '@material-ui/core/styles/createPalette';
import { IPalette } from './theme';

declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    colors: IPalette;
  }

  interface Palette {
    colors: IPalette;
  }
}
