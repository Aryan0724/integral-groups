import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Ongoing documentation and intelligence logs from the Integral Group ecosystem. Tracking project developments, system updates, and architectural insights.',
  keywords: ['Technology Journal', 'Project Documentation', 'Engineering Logs', 'Integral Group Updates'],
  alternates: {
    canonical: '/journal',
  },
};

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
