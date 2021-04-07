import { createMuiTheme } from '@material-ui/core/styles';


export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      // light: '#EC805C',
      main: '#545863',
      // dark: '#EC805C',
      // dark: será calculada com base em palette.primary.main,
      contrastText: '#FFFFFF',
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#FFE3E3',
      main: '#EC805C',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#FFE3E3',
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 2,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});
