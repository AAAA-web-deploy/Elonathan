import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { site } from '@/content/site';
import StarTrail from '@/components/StarTrail';
import './globals.css';
export const metadata: Metadata = {
  title: `${site.name} ($${site.ticker}) | An independent fictional meme`,
  description: site.heroDescription,
  robots: { index: true, follow:true },
};
export const viewport:Viewport={width:'device-width',initialScale:1};
export default function RootLayout({children}:{children:ReactNode}){return <html lang="en"><body><StarTrail/>{children}</body></html>}
