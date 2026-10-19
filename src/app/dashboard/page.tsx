import type { Metadata } from 'next';
import DashboardClient from './DashboardClient';

export const metadata: Metadata = {
  title: { absolute: 'Visitor dashboard' },
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
