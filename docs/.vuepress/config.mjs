import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default {
  title: 'Abdullah Dilshad',
  description: 'CV and Portfolio',
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/AbdullahDilshadJaff' },
    ],
    themeConfig: {
      navbar: false ,
      sidebar: false,
    }
  }),
  bundler: viteBundler(),
};
