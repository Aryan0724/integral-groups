import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collaborate',
  description: 'Join the Integral Group network. We partner with innovators, engineers, and industrial leaders to build the next generation of intelligent infrastructure.',
  keywords: ['Partnerships', 'Collaboration', 'Engineering Network', 'Join Integral Group'],
  alternates: {
    canonical: '/collaborate',
  },
};

export default function CollaborateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
