import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labs',
  description: 'Integral Labs is our high-performance engineering wing, focused on building custom AI workflows, automated infrastructure, and intelligence-driven solutions for global industries.',
  keywords: ['Integral Labs', 'Custom AI Solutions', 'Engineering Agency', 'Automation Workflows'],
  alternates: {
    canonical: '/labs',
  },
};

export default function LabsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
