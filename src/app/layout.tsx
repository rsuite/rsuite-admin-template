import React from 'react';
import { Providers } from './providers';
import 'rsuite/dist/rsuite.css';
import './globals.css';
import './auth.css';

export const metadata = {
  title: 'RSUITE Admin Template',
  description: 'RSUITE Management System'
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
