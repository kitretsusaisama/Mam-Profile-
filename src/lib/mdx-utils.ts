import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const POSTS_PATH = path.join(process.cwd(), 'src/content/posts');

export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  categories: string[];
  tags: string[];
  authors: string[];
}

export function getPostSlugs(): string[] {
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const realSlug = slug.replace(/\.mdx?$/, '');
    const fullPath = path.join(POSTS_PATH, `${realSlug}.mdx`);
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug: realSlug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      content,
      featuredImage: data.featuredImage,
      categories: data.categories || [],
      tags: data.tags || [],
      authors: data.authors || [],
    };
  } catch (error) {
    console.error(`Error reading file ${slug}:`, error);
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  const validPosts = posts.filter((post): post is Post => post !== null);
  return validPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
}

export async function serializeMDX(source: string) {
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypePrism,
      ],
    },
    parseFrontmatter: true,
  });
  return mdxSource;
}