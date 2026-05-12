import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Systems',
  description: 'Real-time operational monitoring of Integral Group infrastructure nodes. Track system stability, latency, and core deployments across our global mesh.',
  keywords: ['Infrastructure Monitoring', 'System Status', 'Digital Infrastructure', 'Real-time Metrics'],
  alternates: {
    canonical: '/systems',
  },
};

export default function SystemsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
