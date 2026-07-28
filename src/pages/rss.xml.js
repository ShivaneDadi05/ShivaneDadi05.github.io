import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Shivane Dadi',
    description: 'Notes on quantum algorithms, and other things.',
    site: context.site,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: p.data.description ?? '',
      link: `/writing/${p.id}/`,
    })),
  });
}
