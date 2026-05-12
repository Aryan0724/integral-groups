import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Explore the deployment portfolio of Integral Group. We engineer the operating interface for the next industrial era, from AI platforms to automated ecosystems.',
  keywords: ['Case Studies', 'AI Deployments', 'Systems Engineering', 'Integral Group Work'],
  alternates: {
    canonical: '/work',
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
