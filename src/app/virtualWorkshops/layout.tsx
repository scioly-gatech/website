import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Virtual Workshops',
  description: 'Access workshop recordings and slides',
};

export default function VirtualWorkshopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 