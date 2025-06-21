// app/blog/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, serializeMDX } from '@/lib/mdx-utils';
import BlogContent from '@/components/blog/BlogContent';
import PageViewTracker from '@/components/analytics/PageViewTracker';

// Optional: Ensure dynamic rendering
export const dynamic = 'force-dynamic';

// Generate dynamic metadata for WS Clinic blog posts
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);

    if (!post) {
      return {
        title: 'Post Not Found | WS Clinic',
        description: 'The requested blog post could not be found.',
      };
    }

    return {
      title: `${post.title} | WS Clinic`,
      description: post.excerpt || 'Read this informative health article from WS Clinic.',
      keywords: post.tags || ['health', 'wellness', 'clinic', 'WS Clinic'],
      openGraph: {
        title: post.title,
        description: post.excerpt || 'Read this informative health article from WS Clinic.',
        images: post.featuredImage ? [post.featuredImage] : [],
        type: 'article',
        locale: 'en_IN',
        siteName: 'WS Clinic',
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt || 'Read this informative health article from WS Clinic.',
        images: post.featuredImage ? [post.featuredImage] : [],
      },
      authors: post.authors
        ? Array.isArray(post.authors)
          ? post.authors.map((author) =>
              typeof author === 'string' ? { name: author } : author
            )
          : [typeof post.authors === 'string' ? { name: post.authors } : post.authors]
        : [{ name: 'WS Clinic Team' }],
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Health Blog | WS Clinic',
      description: 'Read expert-backed articles on healthcare and wellness from WS Clinic.',
    };
  }
}

// Blog page component for WS Clinic
export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const post = await getPostBySlug(slug);
    if (!post) notFound();

    const mdxSource = await serializeMDX(post.content);

    return (
      <>
        <PageViewTracker path={`/blog/${slug}`} />
        <BlogContent post={post} mdxSource={mdxSource} />
      </>
    );
  } catch (error) {
    console.error('Error rendering blog post:', error);
    notFound();
  }
}
