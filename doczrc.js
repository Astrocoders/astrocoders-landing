import doczPluginNetlify from 'docz-plugin-netlify'
import { css } from 'docz-plugin-css'
import theme from './src/utils/theme'

export default {
  title: 'Astrocoders',
  description: 'Astro UI documentation',
  themeConfig: {
    colors: {
      primary: theme.colors.primary,
    },
  },
  plugins: [doczPluginNetlify(), css()],
}
