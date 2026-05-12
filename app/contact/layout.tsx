import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Reach out to the Integral Group team. Inquire about our systems, partnership opportunities, or technical solutions.',
  keywords: ['Contact Integral Group', 'Inquiry', 'Technical Support', 'Business Development'],
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
