module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'select': '#F9A826',
        'option': '#9094DE',
        'heading': '#2F527B',
        'correct': '#60BF88',
        'wrong': '#EA8282'
      },
      borderRadius: {
        '12': '0.75rem',
        '24': '1.5rem'
      }
    },
  },
  variants: {},
  plugins: [],
}
