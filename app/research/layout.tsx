import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Deep-dive technical research and industrial intelligence reports from Integral Group. Analyzing the intersection of AI, infrastructure, and future-ready digital technologies.',
  keywords: ['AI Research', 'Industrial Intelligence', 'Technological Innovation', 'Research Reports'],
  alternates: {
    canonical: '/research',
  },
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
