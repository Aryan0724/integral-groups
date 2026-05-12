import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ecosystem',
  description: 'The interconnected architecture of Integral Group. Explore how our media systems, research wings, and engineering labs form a unified intelligence ecosystem.',
  keywords: ['Technology Ecosystem', 'System Architecture', 'Modular Innovation', 'Integral Group Network'],
  alternates: {
    canonical: '/ecosystem',
  },
};

export default function EcosystemLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
