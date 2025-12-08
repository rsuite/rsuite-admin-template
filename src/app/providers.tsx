'use client';

import React from 'react';
import { CustomProvider } from 'rsuite';
import enGB from 'rsuite/locales/en_GB';

export function Providers({ children }: { children: React.ReactNode }) {
  return <CustomProvider locale={enGB}>{children}</CustomProvider>;
}
