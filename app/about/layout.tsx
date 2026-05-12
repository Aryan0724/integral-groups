import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Integral Group, our core philosophy, and the leadership building the actual infrastructure that makes intelligence useful in the real world.',
  keywords: ['About Integral Group', 'Technology Leadership', 'Systems Engineering', 'Modular Infrastructure'],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About Integral Group | Engineering Intelligent Systems',
    description: 'The story and philosophy behind Integral Group.',
    url: 'https://integralgroups.in/about',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Integral Group | Engineering Intelligent Systems',
    description: 'Learn about the vision and team behind Integral Group.',
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
