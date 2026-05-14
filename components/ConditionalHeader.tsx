'use client';

import { usePathname } from 'next/navigation';
import Header from './header';

// Routes where the global site header should not appear
const HEADER_HIDDEN_ROUTES = ['/studentform'];

export default function ConditionalHeader() {
  const pathname = usePathname();
  if (HEADER_HIDDEN_ROUTES.includes(pathname)) return null;
  return <Header />;
}
