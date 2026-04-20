import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forma — Move. We handle the rest.',
  description:
    'Forma builds your workout, adapts your progression, and adjusts tomorrow based on today. No thinking required.',
  openGraph: {
    title: 'Forma — Move. We handle the rest.',
    description:
      'Forma builds your workout, adapts your progression, and adjusts tomorrow based on today.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
