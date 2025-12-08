'use client';

import Frame from '@/components/Frame';
import { appNavs } from '@/config';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return <Frame navs={appNavs}>{children}</Frame>;
}
