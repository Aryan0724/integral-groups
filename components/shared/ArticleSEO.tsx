import React from 'react';

interface ArticleSEOProps {
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  url: string;
}

export function ArticleSEO({ title, description, image, date, author, url }: ArticleSEOProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": description,
          "image": image,
          "datePublished": date,
          "author": {
            "@type": "Person",
            "name": author
          },
          "publisher": {
            "@type": "Organization",
            "name": "Integral Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://integralgroups.in/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          }
        })
      }}
    />
  );
}
