// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export default defineConfig({
  // Your live URL. Used for the sitemap and RSS feed.
  site: 'https://shivanedadi.com',
  // NOTE: no `base` set — correct when using a custom domain.

  integrations: [sitemap()],

  markdown: {
    // LaTeX: $inline$ and $$block$$ are rendered to HTML at build time.
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: 'github-light',
      wrap: false,
    },
  },

  // ---------------------------------------------------------------
  // FONTS — swap these when you have your files.
  // Drop .woff2 files into src/assets/fonts/, then uncomment:
  //
  // fonts: [
  //   {
  //     provider: 'local',
  //     name: 'Your Serif',
  //     cssVariable: '--font-serif',
  //     variants: [
  //       { weight: 400, style: 'normal', src: ['./src/assets/fonts/YourSerif-Regular.woff2'] },
  //       { weight: 400, style: 'italic', src: ['./src/assets/fonts/YourSerif-Italic.woff2'] },
  //     ],
  //   },
  // ],
  // ---------------------------------------------------------------
});
