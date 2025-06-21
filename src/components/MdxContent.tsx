'use client';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';

interface ImageProps {
  alt?: string;
  width?: number;
  height?: number;
  src?: string;
  nextImage?: {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
  };
}

const components = {
  Img: (props: ImageProps) => {
    const [isLoading, setIsLoading] = React.useState(true);
    return (
      <div className="my-12 relative group">
        <div className="flex justify-center transform transition-transform duration-500 hover:scale-[1.02]">
          {isLoading && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-lg" />
          )}
          <Image
            {...props}
            src={props.src || ''}
            alt={props.alt || ''}
            className={`rounded-xl shadow-2xl max-w-full h-auto transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'} hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]`}
            width={props.width || 700}
            height={props.height || 400}
            priority={true}
            onLoad={() => setIsLoading(false)}
            quality={90}
          />
        </div>
        {props.alt && (
          <p className="text-sm text-gray-500 mt-3 text-center italic transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            {props.alt}
          </p>
        )}
      </div>
    );
  },
  h1: (props: ImageProps) => (
    <>
      {/* <h1
        {...props}
        className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0e305e] to-[#1a4b8f] mb-8 mt-12 leading-tight tracking-tighter transition-colors duration-300 hover:from-[#1a4b8f] hover:to-[#0e305e]"
      /> */}
      {props.nextImage && (
        <div className="my-12 relative group transform transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src={props.nextImage.src}
            alt={props.nextImage.alt || ''}
            className="rounded-xl shadow-2xl max-w-full h-auto transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
            width={props.nextImage.width || 700}
            height={props.nextImage.height || 400}
            priority={true}
            quality={90}
          />
        </div>
      )}
    </>
  ),
};

interface Frontmatter {
  title?: string;
  featuredImage?: string;
}

export default function MdxContent({ source, frontmatter }: { source: MDXRemoteSerializeResult, frontmatter?: Frontmatter }) {
  return (
    <div className="prose prose-lg max-w-none prose-img:rounded-xl prose-img:shadow-2xl prose-h1:bg-clip-text prose-h1:text-transparent prose-h1:bg-gradient-to-r prose-h1:from-[#0e305e] prose-h1:to-[#1a4b8f] prose-h1:font-bold prose-h1:mb-8 prose-h1:mt-12 prose-h1:leading-tight prose-h1:tracking-tighter prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#1a4b8f] prose-a:no-underline prose-a:font-medium hover:prose-a:text-[#0e305e] prose-a:transition-colors prose-a:duration-300 prose-headings:transition-colors prose-headings:duration-300">
      {/* Render the title (h1) and featured image if available */}
      {frontmatter?.title && (
        <>
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0e305e] to-[#1a4b8f] mb-8 mt-12 leading-tight tracking-tighter transition-colors duration-300 hover:from-[#1a4b8f] hover:to-[#0e305e]">{frontmatter.title}</h1>
        </>
      )}
      {frontmatter?.featuredImage && (
        <div className="my-12 relative group transform transition-transform duration-500 hover:scale-[1.02]">
          <Image
            src={frontmatter.featuredImage}
            alt={frontmatter.title || ''}
            className="rounded-xl shadow-2xl max-w-full h-auto transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]"
            width={700}
            height={400}
            priority={true}
            quality={90}
          />
        </div>
      )}
      <MDXRemote {...source} components={components} />
    </div>
  );
}
