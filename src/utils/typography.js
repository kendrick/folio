import Typography from 'typography';
const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Work Sans',
      styles: ['300', '400', '400i', '600', '600i'],
    },
  ],
  headerWeight: 500,
  boldWeight: 500,
  headerFontFamily: [
    'Work Sans',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: [
    'Work Sans',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
});
export default typography;
