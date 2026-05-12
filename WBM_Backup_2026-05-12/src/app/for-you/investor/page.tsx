import type { Metadata } from 'next';
import PageView from './view';

export const metadata: Metadata = {
  title: 'Investor Journey | Waste Be Minerals',
  description: 'Explore the investor journey and semiconductor-grade unit economics of Waste Be Minerals.',
};

export default function InvestorPage() {
  return <PageView />;
}
