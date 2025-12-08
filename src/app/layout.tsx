import React from 'react';
import { Providers } from './providers';
import 'rsuite/dist/rsuite.css';
import './globals.css';

export const metadata = {
  title: 'React Suite Admin Template',
  description: 'A modern React Suite admin dashboard template built with Next.js and RSuite.',
  keywords: [
    'React Suite',
    'RSuite',
    'admin template',
    'dashboard',
    'Next.js',
    'management system'
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
